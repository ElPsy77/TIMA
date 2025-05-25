"use client";

import { Category } from "@prisma/client";


import { IoHardwareChip, IoGrid } from "react-icons/io5";


import { FaVirusCovid } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { GiDread } from "react-icons/gi";
import { WiSmoke } from "react-icons/wi";
import { GiLetterBomb } from "react-icons/gi";
import { GiPistolGun } from "react-icons/gi";
import { GiChemicalDrop } from "react-icons/gi";
import { GiGasMask } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { RiEarthquakeFill } from "react-icons/ri";
import { FaFireExtinguisher } from "react-icons/fa";

import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<string, IconType> = {
  "Все": IoGrid,
  "Пожар": FaFireExtinguisher,
  "Землетрясение": RiEarthquakeFill,
  "Авария на системах электроснабжения": ImPower,
  "Утечка газа": GiGasMask,
  "Химическое заражение": GiChemicalDrop,
  "Угроза вооруженного нападения": GiPistolGun,
  "Анонимные сообщения о минировании": GiLetterBomb,
  "Задымление в помещении": WiSmoke,
  "Паника при ЧС": GiDread,
  "Конфликтные ситуации между обучающимися": FaPeopleArrows,
  "Вспышка инфекционного заболевания": FaVirusCovid ,
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
