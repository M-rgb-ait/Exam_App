// import Image from "next/image";
// import group from '../../public/assets/icons/Group.png'
// import vector from '../../public/assets/icons/Vector.png'
// import vectr from '../../public/assets/icons/Vector.svg'
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/auth";
// import Frame from '../../public/assets/images/Frame 40.svg'
// import Link from "next/link";
// import HomePage from "./_component/homepage/page";

import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl flex justify-center items-center h-screen">
        <Link
          href="/route/dashboard"
          className="text-red-800 text-3xl underline"
        >
          Wellcome to examapp
        </Link>
      </h1>
      {/* <HomePage /> */}
    </>
  );
}
