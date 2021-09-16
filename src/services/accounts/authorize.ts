import argon2 from "argon2";

export default async function authorizeUser(email, password) {
  // get user from database
  const user = {
    hashedPassword: "",
  };

  if (!user) return false;

  const isAuthorized = await argon2.verify(user.hashedPassword, password);

  return isAuthorized;
}
