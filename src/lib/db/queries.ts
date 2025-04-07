import prisma from "@/lib/db/prisma";
import { User } from "next-auth";

export async function addUser(user: User) {
  let count = 0;
  if (user.image) {
    const uid = parseInt(user.image.split("/")[4].split("?")[0]);
    count = await prisma.user.count({
      where: {
        user_id: uid,
      },
    });

    if (count === 0) {
      await prisma.user.create({
        data: { user_id: uid, name: user.name, email: user?.email },
      });
    }
  }
}

export async function checkIfUserHasAccessToList(
  user: User,
  shoppingListId: number
) {
  let count = 0;

  if (user.image) {
    const uid = parseInt(user.image.split("/")[4].split("?")[0]);

    count = await prisma.shoppingList.count({
      where: {
        id: shoppingListId,
        OR: [
          {
            User: {
              user_id: uid,
            },
          },
          {
            Access: {
              some: {
                User: {
                  user_id: uid,
                },
              },
            },
          },
        ],
      },
    });
  }

  return !!count;
}

export async function checkIfUserOwnsList(user: User, shoppingListId: number) {
  let count = 0;

  if (user.image) {
    const uid = parseInt(user.image.split("/")[4].split("?")[0]);

    count = await prisma.shoppingList.count({
      where: {
        id: shoppingListId,
        User: {
          user_id: uid,
        },
      },
    });
  }

  return !!count;
}

export async function getLists(user: User) {
  if (user.image) {
    const uid = parseInt(user.image.split("/")[4].split("?")[0]);

    const result = await prisma.shoppingList.findMany({
      where: {
        OR: [
          {
            User: {
              user_id: uid,
            },
          },
          {
            Access: {
              some: {
                User: {
                  user_id: uid,
                },
              },
            },
          },
        ],
      },
      select: {
        id: true,
        name: true,
      },
    });

    return result;
  }
}

export async function createList(name: string, user: User) {
  if (user.image) {
    const uid = parseInt(user.image.split("/")[4].split("?")[0]);

    const id = await prisma.user.findFirst({
      where: { user_id: uid },
      select: { id: true },
    });

    if (id?.id) {
      const result = await prisma.shoppingList.create({
        data: {
          name: name,
          user_owner: id.id,
        },
        select: {
          id: true,
        },
      });

      if (result.id) return { data: result.id, error: null };
      return { data: null, error: "Could not create list!" };
    }
  }
  return { data: null, error: "No user id found" };
}
