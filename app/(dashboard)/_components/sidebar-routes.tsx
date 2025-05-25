"use client";

import { BarChart,Bell,Compass, Heart, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";
import { FaChalkboardTeacher } from "react-icons/fa";

const guestRoutes = [
  {
    icon: Layout,
    label: "Панель",
    href: "/dashboard",
  },
  {
    icon: Compass,
    label: "Обзор",
    href: "/browse",
  },
  {
    icon: Heart,
    label: "Мои Избранные",
    href: "/collections/favorites",
  },
  //{ тут раньше был раздел для преподавателей, но он удален временно
  //  icon: FaChalkboardTeacher,
  //  label: "Преподаватели",
  //  href: "/instructors",
  //},
];

const teacherRoutes = [
  {
    icon: List,
    label: "Курсы",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Аналитика",
    href: "/teacher/analytics",
  },
  {
    icon: Bell,
    label: "Объявления",
    href: "/teacher/announcements", 
  }
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}