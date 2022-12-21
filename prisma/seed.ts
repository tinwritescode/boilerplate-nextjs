import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

const main = async () => {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "example@gmail.com",
    },
  });
};

main();
