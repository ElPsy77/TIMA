"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
      <Button 
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/settings">
            Настройки
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/" ? "default" : "outline"}
        >
          <Link href="/">
            Вернуться на главную
          </Link>
        </Button>
        
      </div>
      <UserButton />
    </nav>
  );
};