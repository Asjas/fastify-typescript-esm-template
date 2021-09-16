import argon2 from "argon2";

export async function registerUser(email, password) {
  try {
    const hashedPassword = await argon2.hash(password);

    // insert user with hashed password into database

    // return inserted user data
  } catch (err) {
    console.error(err);
  }
}
