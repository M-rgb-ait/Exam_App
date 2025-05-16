// import Home from "@/app/page";
import { Suspense } from "react";
import SubjectsApi from "./_components/subjects";
import HomePage from "@/app/_component/homepage/page";

export default function dashboard() {
  return (
    <div className="bg-[#FBF9F9]">
      <HomePage />

      <div className="p-5 mb-5">
        <h4 className="text-[#4461F2] font-medium text-xl">Quizes</h4>
      </div>
      <Suspense fallback="Loading questions...">
        <SubjectsApi />
      </Suspense>
    </div>
  );
}
