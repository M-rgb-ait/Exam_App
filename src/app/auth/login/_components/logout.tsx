"use client";

// import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    // /auth/login
    <li
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-xl font-semibold text-[#696F79]"
    >
      Logout
    </li>
  );
}
