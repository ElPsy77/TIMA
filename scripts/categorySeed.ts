const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Биотехнологии" },
        { name: "Химическая Инженерия" },
        { name: "Гражданское Строительство" },
        { name: "Компьютерные науки и Инженерия" },
        { name: "Электроника и Коммуникационная инженерия" },
        { name: "Электротехника" },
        { name: "Промышленный и Производственный инженерия" },
        { name: "Информационные Технологии" },
        { name: "Приборостроение и Контрольная техника" },
        { name: "Машиностроение" },
        { name: "Текстильные технологии" },
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