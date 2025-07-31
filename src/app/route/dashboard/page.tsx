// import { Suspense } from "react";
import SubjectsApi from "./_components/subjects";
import HomePage from "@/app/_component/homepage/page";
import Link from "next/link";

export default function dashboard() {
  return (
    <>
      <div className="bg-[#FBF9F9]">
        <HomePage />

        <div className="p-5 mb-5 flex items-center justify-between">
          <h4 className="text-[#4461F2] font-medium text-xl">Quizes</h4>

          <Link href="/route/allquizes">
            <h4 className="text-[#4461F2] font-medium text-xl">All Quizes</h4>
          </Link>
        </div>
      </div>
      <SubjectsApi />
    </>
  );
}
