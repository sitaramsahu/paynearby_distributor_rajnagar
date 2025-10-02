const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedAdmin = await bcrypt.hash("PayNearby@321", 10);

  await prisma.paynearby_admin.create({
    data: {
      name: "PayNearby Distributor",
      email: "rajucyberseva@gmail.com",
      password: hashedAdmin,
    },
  });
  console.log("✅ PayNearby Dummy admin created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
