import { Response } from "express";

interface SSEClient {
  id: string;
  res: Response;
}

class SSEManager {
  private clients: Map<string, SSEClient[]> = new Map();

  addClient(userId: string, res: Response) {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    });
    res.write("\n");

    const client: SSEClient = { id: userId, res };

    if (!this.clients.has(userId)) {
      this.clients.set(userId, []);
    }
    this.clients.get(userId)!.push(client);

    res.on("close", () => {
      const userClients = this.clients.get(userId);
      if (userClients) {
        const idx = userClients.indexOf(client);
        if (idx !== -1) userClients.splice(idx, 1);
        if (userClients.length === 0) this.clients.delete(userId);
      }
    });
  }

  send(userId: string, event: string, data: unknown) {
    const userClients = this.clients.get(userId);
    if (userClients) {
      const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
      userClients.forEach((c) => c.res.write(payload));
    }
  }

  broadcast(event: string, data: unknown) {
    const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
    this.clients.forEach((clients) => {
      clients.forEach((c) => c.res.write(payload));
    });
  }

  sendToUsers(userIds: string[], event: string, data: unknown) {
    const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
    for (const userId of userIds) {
      const userClients = this.clients.get(userId);
      if (userClients) {
        userClients.forEach((c) => c.res.write(payload));
      }
    }
  }
}

export const sseManager = new SSEManager();
