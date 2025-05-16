import Frame from "../../../../public/assets/images/Frame 40.svg";
import Link from "next/link";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/auth";
import Image from "next/image";

export default async function Shearch() {
  // const session = await getServerSession(authOptions);

  return (
    <div className="relative mb-5">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <div className="flex justify-between gap-4">
        <input
          type="search"
          id="default-search"
          className=" w-[75%] focus:outline-none shadow-xl p-4 ps-10 text-sm text-gray-900 rounded-lg bg-white"
          placeholder="Search Quiz"
        />

        {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-2xl text-sm px-7 py-3">Start Quiz</button> */}
        <Link
          href="/route/question"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-2xl text-sm px-7 py-3"
        >
          Start Quiz
        </Link>
        <Image src={Frame} alt="frame" className="w-[50px] rounded-full" />
        {/* <img
          src={session?.user?.picture}
          alt="frame"
          className="w-[50px] rounded-full"
        /> */}
      </div>
    </div>
  );
}
