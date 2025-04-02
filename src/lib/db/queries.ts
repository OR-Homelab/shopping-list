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

    if (count == 0) {
      await prisma.user.create({ data: { user_id: uid, name: user.name } });
    }
  }

  return count;
}

export async function checkIfAdmin(user: User) {
  let count = 0;
  if (user.image) {
    const uid = parseInt(user.image.split("/")[4].split("?")[0]);
    count = await prisma.user.count({
      where: {
        user_id: uid,
      },
    });
  }

  return !!count;
}
