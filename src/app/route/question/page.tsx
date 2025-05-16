import { Suspense } from "react";
import ExamsList from "./_components/exam-list";

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div>
        <Suspense fallback="Loading exams...">
      <ExamsList searchParams={searchParams}/>
        </Suspense>
    </div>
  )
}
