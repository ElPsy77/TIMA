const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Пожар" },
        { name: "Землятрясение" },
        { name: "Авария на системах электроснабжения" },
        { name: "Утечка газа" },
        { name: "Химическое заражение" },
        { name: "Угроза вооруженного нападения" },
        { name: "Анонимные сообщения о минировании" },
        { name: "Задымление в помещении" },
        { name: "Паника при ЧС" },
        { name: "Конфликтные ситуации между обучающимися" },
        { name: "Вспышка инфекционного заболевания" },
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