import { Request, Response } from "express";
import * as agoraService from "../services/agora.service";
import catchAsync from "../utils/catchAsync";
import prisma from "../config/db";

/**
 * GET /chat/agora-token
 * Returns an Agora Chat token for the authenticated user.
 */
export const getToken = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const token = agoraService.generateAgoraToken(userId);

  // Construct Chat AppKey from OrgName#AppName
  const orgName = process.env.AGORA_ORG_NAME!;
  const appName = process.env.AGORA_APP_NAME!;
  const appKey = `${orgName}#${appName}`;

  res.json({
    success: true,
    data: { token, userId: String(userId), appKey, appId: process.env.AGORA_APP_ID },
  });
});

/**
 * POST /chat/agora-register
 * Registers the authenticated user in Agora Chat.
 */
export const registerUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const dbUser = await prisma.user.findUnique({ where: { id: userId } });
  const name = dbUser?.name || "User";

  await agoraService.registerAgoraUser(userId, name);

  res.json({ success: true });
});

/**
 * POST /chat/agora-group
 * Creates an Agora group and adds participants.
 * Body: { groupId: string, groupName: string, participantIds: number[] }
 */
export const createGroup = catchAsync(async (req: Request, res: Response) => {
  const { groupId, groupName, participantIds } = req.body;

  await agoraService.createAgoraGroup(groupId, groupName, participantIds?.[0]);

  // Add all participants to the group
  if (participantIds && Array.isArray(participantIds)) {
    const additions = participantIds.map((userId: number) =>
      agoraService.addUserToAgoraGroup(groupId, userId)
    );
    await Promise.allSettled(additions);
  }

  res.json({ success: true });
});
