import jwt from "jsonwebtoken";

const JWTSignature = process.env.JWT_SIGNATURE;

export function createTokens(sessionId, userId) {
  try {
    const refreshToken = jwt.sign({ sessionId }, JWTSignature);
    const accessToken = jwt.sign({ sessionId, userId }, JWTSignature);

    return { accessToken, refreshToken };
  } catch (e) {
    console.error(e);
  }
}
