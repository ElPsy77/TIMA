"use client";

import { Category } from "@prisma/client";
import { GiChemicalDrop } from "react-icons/gi";
import { IoIosConstruct } from "react-icons/io";
import { FaIndustry, FaLaptop } from "react-icons/fa";
import { AiOutlineControl } from "react-icons/ai";
import { GiGears, GiSewingString } from "react-icons/gi";
import { MdBiotech, MdElectricBolt } from "react-icons/md";
import { IoHardwareChip, IoGrid } from "react-icons/io5";
import { PiCircuitryFill } from "react-icons/pi";

import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<string, IconType> = {
  "Все": IoGrid,
  "Пожар": MdBiotech,
  "Землетрясение": GiChemicalDrop,
  "Авария на системах электроснабжения": IoIosConstruct,
  "Утечка газа": IoHardwareChip,
  "Химическое заражение": PiCircuitryFill,
  "Угроза вооруженного нападения": MdElectricBolt,
  "Анонимные сообщения о минировании": FaIndustry,
  "Задымление в помещении": FaLaptop,
  "Паника при ЧС": AiOutlineControl,
  "Конфликтные ситуации между обучающимися": GiGears,
  "Вспышка инфекционного заболевания": GiSewingString,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  const allCategory = { id: "all", name: "Все" };
  const categories = [allCategory, ...items];

  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}
