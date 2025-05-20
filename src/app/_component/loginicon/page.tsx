"use client";
import { signIn } from "next-auth/react";

// images
import Image from "next/image";
import google from "@assets/images/googel.svg";
import github from "@assets/images/github-mark.svg";
import apple from "@assets/images/apple.svg";
import facebook from "@assets/images/facebook.svg";
import twitter from "@assets/images/twitter.svg";

export default function LoginIcon() {
  return (
    <div>
      <p className="mt-10 text-center text-sm/6 text-gray-500">-Or Continue with-</p>

      <div className="flex items-center justify-center gap-5 mt-7">
        <div className="w-11 h-11 border-2 rounded-lg">
          <div className="w-6 h-6 flex items-center justify-center mt-2 mb-1 m-auto">
            <Image
              src={google}
              alt="Picture of the"
              onClick={() => {
                signIn("google", {
                  callbackUrl: "/route/dashboard",
                });
              }}
            />
          </div>
        </div>

        <div className="w-11 h-11 border-2 rounded-lg">
          <div className="w-6 h-6 flex items-center justify-center mt-2 mb-1 m-auto">
            <Image
              src={github}
              alt="Picture of the"
              onClick={() => {
                signIn("github", {
                  callbackUrl: "/route/dashboard",
                });
              }}
            />
          </div>
        </div>

        <div className="w-11 h-11 border-2 rounded-lg">
          <div className="w-6 h-6 flex items-center justify-center mt-2 mb-1 m-auto">
            <Image src={apple} alt="Picture of the author" />
          </div>
        </div>
        <div className="w-11 h-11 border-2 rounded-lg">
          <div className="w-6 h-6 flex items-center justify-center mt-2 mb-1 m-auto">
            <Image src={facebook} alt="Picture of the author" />
          </div>
        </div>
        <div className="w-11 h-11 border-2 rounded-lg">
          <div className="w-6 h-6 flex items-center justify-center mt-2 mb-1 m-auto">
            <Image
              src={twitter}
              alt="Picture of the author"
              onClick={() => {
                signIn("twitter", {
                  callbackUrl: "/route/dashboard",
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
