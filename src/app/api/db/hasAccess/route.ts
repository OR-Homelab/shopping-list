import { auth } from "@/auth/auth";
import { checkIfUserHasAccessToList } from "@/lib/db/queries";

export async function GET(req: Request) {
  const session = await auth();

  if (!!session && session.user) {
    const url = new URL(req.url);

    const listId = url.searchParams.get("listId");

    if (listId && !isNaN(parseInt(listId))) {
      return Response.json({
        data: await checkIfUserHasAccessToList(session.user, parseInt(listId)),
      });
    }
  }
  return Response.json({ data: false });
}
