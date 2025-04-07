import { auth } from "@/auth/auth";

import { createList, getLists } from "@/lib/db/queries";

export async function GET() {
  const session = await auth();

  if (!!session && session.user) {
    const result = await getLists(session.user);

    return Response.json({ data: result, error: null });
  }

  return Response.json({ data: null, error: "Not authorized" });
}

export async function POST(req: Request) {
  const session = await auth();

  if (!!session && session.user) {
    const origin = req.headers.get("origin");

    if (origin === null) {
      return Response.json({ data: null, error: "No origin" });
    }

    const redirectUrl = new URL(origin);

    const name = (await req.formData()).get("list-name")?.toString();

    let result: { data: null | number; error: null | string } = {
      data: null,
      error: "Name error",
    };

    if (name && name.length > 0 && name.length <= 50) {
      result = await createList(name, session.user);
      redirectUrl.href += `/shopping/lists/${result.data}`;
    }
    return Response.redirect(redirectUrl);
  }
  return Response.json({ data: null, error: "Not authorized" });
}
