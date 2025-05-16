"use client";

import Image from "next/image";
import elevete from "../../../../public/assets/images/Final Logo 1.svg";
import icondash from "../../../../public/assets/icons/Vector (4).png";
import iconquiz from "../../../../public/assets/icons/Vector (2).png";
import iconlogin from "../../../../public/assets/icons/Vector (3).png";
import Link from "next/link";
import Logout from "@/app/auth/login/_components/logout";
import { usePathname } from "next/navigation";
// import DeleteAcunte from "@/app/auth/deleteacunte/deleteacunte";

export default function Navlink() {
  const pathname = usePathname();
  const navigationlinks = [
    {
      title: "Dashboard",
      href: "/route/dashboard",
      icon: icondash,
    },
    {
      title: "Quiz History",
      href: "/route/question",
      icon: iconquiz,
    },
  ];

  return (
    <nav>
      <Image src={elevete} alt="Elevete" className="w-[150px] h-7 mb-5" />
      <ul>
        {navigationlinks.map((link) => (
          <li key={link.title}>
            <div className="flex items-center gap-3 mt-10 mb-10">
              <Image src={link.icon} alt="icon" />
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "active border-x border p-1 bg-blue-600 rounded-lg text-white font-normal"
                    : "text-xl font-semibold text-[#696F79]"
                }
              >
                {link.title}
              </Link>
            </div>
          </li>
        ))}
        <div className="flex items-center gap-4 cursor-pointer">
          <Image src={iconlogin} alt="icon" />
          <Logout />
        </div>
      </ul>
      {/* <li
        onClick={() => DeleteAcunte()}
        className="text-xl font-semibold text-[#696F79]"
      >
        <Link href="/auth/login">DeleteAcunte</Link>
      </li> */}
    </nav>
  );
}
