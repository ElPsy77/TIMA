"use client";

import { Category } from "@prisma/client";


import { IoHardwareChip, IoGrid } from "react-icons/io5";
import { VscLaw } from "react-icons/vsc";



import { FaVirusCovid } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { GiDread } from "react-icons/gi";
import { GiEcology } from "react-icons/gi";

import { GiLetterBomb } from "react-icons/gi";
import { GiPistolGun } from "react-icons/gi";
import { CiMedicalCross } from "react-icons/ci";

import { GiGasMask } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";

import { RiEarthquakeFill } from "react-icons/ri";
import { FaFireExtinguisher } from "react-icons/fa";

import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<string, IconType> = {
  "Все": IoGrid,
  "Пожарная безопасность": FaFireExtinguisher,
  "Землетрясение": RiEarthquakeFill,
  "Трудовое законодательство": VscLaw,
  "Утечка газа": GiGasMask,
  "Санитарные нормы и требования": CiMedicalCross ,
  "Угроза вооруженного нападения": GiPistolGun,
  "Анонимные сообщения о минировании": GiLetterBomb,
  "Электробезопасность": MdElectricalServices,
  "Паника при ЧС": GiDread,
  "Конфликтные ситуации между обучающимися": FaPeopleArrows,
  "Охрана окружающей среды": GiEcology,};

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
