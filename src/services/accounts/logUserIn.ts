import { createSession } from "./session";

export async function logUserIn(userId, request, reply) {
  const ip = {
    ip: request.ip,
    userAgent: request.headers["user-agent"],
  };
  const sessionToken = await createSession(userId, connectionInformation);

  const { accessToken, refreshToken } = await createTokens(sessionToken, userId);

  const now = new Date();
  const refreshExpires = now.setDate(now.getDate() + 7);

  reply
    .setCookie("refreshToken", refreshToken, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      expires: refreshExpires,
    })
    .setCookie("accessToken", accessToken, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
    });
}
