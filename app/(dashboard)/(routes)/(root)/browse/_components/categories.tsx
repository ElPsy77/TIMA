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
  "Химическое заражение": PiCircuitryFill,
  "Электротехника": MdElectricBolt,
  "Промышленный и Производственный инженерия": FaIndustry,
  "Информационные Технологии": FaLaptop,
  "Приборостроение и Контрольная техника": AiOutlineControl,
  "Машиностроение": GiGears,
  "Текстильные технологии": GiSewingString,
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
