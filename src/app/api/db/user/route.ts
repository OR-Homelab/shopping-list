import { auth } from "@/auth/auth";
import { addUser } from "@/lib/db/queries";

export async function GET() {
  const session = await auth();

  if (!!session && session.user) {
    await addUser(session.user);

    return Response.json({ data: "Login OK" });
  }
  return Response.json({ error: "Not authorized" });
}
