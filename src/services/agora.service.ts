import { ChatTokenBuilder } from "agora-token";

/**
 * Agora Chat REST API service.
 *
 * REST API base URL: https://{host}/{org_name}/{app_name}/
 * Auth: Bearer token generated with ChatTokenBuilder.buildAppToken()
 */
function getRestBaseUrl(): string {
  const orgName = process.env.AGORA_ORG_NAME!;
  const appName = process.env.AGORA_APP_NAME!;
  // Default host for Agora Chat REST API (global data center)
  // Change via AGORA_CHAT_HOST env var if needed (e.g., "a1sd.chat.agora.io" for China)
  const host = process.env.AGORA_CHAT_HOST || "a5c.chat.agora.io";
  return `https://${host}/${orgName}/${appName}`;
}

function getAppToken(): string {
  const appId = process.env.AGORA_APP_ID!;
  const appCertificate = process.env.AGORA_APP_CERTFIFICATE!;
  return ChatTokenBuilder.buildAppToken(appId, appCertificate, 86400);
}

function getAuthHeaders(): Record<string, string> {
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getAppToken()}`,
  };
}

/**
 * Generate an Agora Chat user token for SDK connection.
 * Token expires in 24 hours.
 */
export function generateAgoraToken(userId: number): string {
  const appId = process.env.AGORA_APP_ID!;
  const appCertificate = process.env.AGORA_APP_CERTFIFICATE!;
  return ChatTokenBuilder.buildUserToken(appId, appCertificate, String(userId), 86400);
}

/**
 * Register a user in Agora Chat via REST API.
 * If the user already exists (error), the error is ignored.
 *
 * REST API: POST /users
 * Body: { username, nickname }
 */
export async function registerAgoraUser(userId: number, name: string): Promise<void> {
  try {
    const baseUrl = getRestBaseUrl();
    const response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        username: String(userId),
        nickname: name,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      // "already exists" is fine
      if (!text.includes("already") && !text.includes("exist")) {
        console.error(`Agora user registration failed (${response.status}):`, text);
      }
    }
  } catch (err) {
    console.error("Agora user registration error:", err);
  }
}

/**
 * Create a chat group in Agora via REST API.
 *
 * REST API: POST /chatgroups
 * Body: { groupid, groupname, description, owner, public, maxusers }
 */
export async function createAgoraGroup(
  groupId: string,
  groupName: string,
  ownerUserId?: number
): Promise<void> {
  try {
    const baseUrl = getRestBaseUrl();
    const response = await fetch(`${baseUrl}/chatgroups`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        groupid: groupId,
        groupname: groupName,
        description: groupName,
        owner: ownerUserId ? String(ownerUserId) : undefined,
        public: false,
        maxusers: 200,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`Agora group creation failed (${response.status}):`, text);
    }
  } catch (err) {
    console.error("Agora group creation error:", err);
  }
}

/**
 * Add a user to an Agora chat group via REST API.
 *
 * REST API: POST /chatgroups/{group_id}/users/{username}
 * This adds a single user to the group.
 */
export async function addUserToAgoraGroup(
  groupId: string,
  userId: number
): Promise<void> {
  try {
    const baseUrl = getRestBaseUrl();
    const response = await fetch(`${baseUrl}/chatgroups/${groupId}/users/${userId}`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      const text = await response.text();
      // "already" in group is fine
      if (!text.includes("already") && !text.includes("exist")) {
        console.error(`Agora add user to group failed (${response.status}):`, text);
      }
    }
  } catch (err) {
    console.error("Agora add user to group error:", err);
  }
}

/**
 * Set up a full Agora chat group for a thread:
 * 1. Register both participants as Agora users
 * 2. Create the group
 * 3. Add both participants to the group
 */
export async function setupThreadGroup(data: {
  threadId: number;
  groupName: string;
  clientUserId?: number | null;
  clientName?: string;
  advisorUserId?: number | null;
  advisorName?: string;
}): Promise<void> {
  const groupId = `agora-thr-${data.threadId}`;

  // Register both users in Agora (fire-and-forget, ignore errors)
  const registrations: Promise<void>[] = [];
  if (data.clientUserId) {
    registrations.push(registerAgoraUser(data.clientUserId, data.clientName || "User"));
  }
  if (data.advisorUserId) {
    registrations.push(registerAgoraUser(data.advisorUserId, data.advisorName || "Advisor"));
  }
  await Promise.allSettled(registrations);

  // Small delay to ensure registrations propagate
  await new Promise(resolve => setTimeout(resolve, 500));

  // Create the group with the client as owner
  await createAgoraGroup(groupId, data.groupName, data.clientUserId || undefined);

  // Add both participants to the group
  const additions: Promise<void>[] = [];
  if (data.clientUserId) {
    additions.push(addUserToAgoraGroup(groupId, data.clientUserId));
  }
  if (data.advisorUserId) {
    additions.push(addUserToAgoraGroup(groupId, data.advisorUserId));
  }
  await Promise.allSettled(additions);
}
