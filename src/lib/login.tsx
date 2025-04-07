"use server";

import { signIn, signOut, auth } from "@/auth/auth";
import { addUser } from "@/lib/db/queries";

export async function getSession() {
  const authOutput = await auth();

  if (!!authOutput && authOutput.user) {
    await addUser(authOutput.user);
  }

  return authOutput;
}

export async function login() {
  await signIn("github", { redirectTo: "/shopping" });
}

export async function logout() {
  await signOut();
}
