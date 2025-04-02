"use server";

import { signIn, signOut, auth } from "@/auth/auth";

export async function getSession() {
  const authOutput = await auth();
  return authOutput;
}

export async function login() {
  await signOut();
}

export async function logout() {
  await signIn("github", { redirectTo: "/shopping" });
}
