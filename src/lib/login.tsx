"use server";

import { signIn, signOut, auth } from "@/auth/auth";
import { addUser } from "@/lib/db/queries";
import { Session } from "next-auth";

export async function getSession() {
  const authOutput = await auth();
  return authOutput;
}

export async function login(session: Session | null) {
  if (!!session && session.user) {
    await addUser(session.user);
  }
  await signIn("github", { redirectTo: "/shopping" });
}

export async function logout() {
  await signOut();
}
