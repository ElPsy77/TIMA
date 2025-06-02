const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Пожарная безопасность" },
        { name: "Землетрясение" },
        { name: "Трудовое законодательство" },
        { name: "Утечка газа" },
        { name: "Санитарные нормы и требования" },
        { name: "Угроза вооруженного нападения" },
        { name: "Анонимные сообщения о минировании" },
        { name: "Электробезопасность " },
        { name: "Паника при ЧС" },
        { name: "Конфликтные ситуации между обучающимися" },
        { name: "Охрана окружающей среды" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();