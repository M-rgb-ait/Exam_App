import { getExamsApi } from "@/lib/api/exam.api";
import catchError from "@/lib/utils/catch-error";
import { BookCheck } from "lucide-react";
import QuestionsDialog from "./questions-dialog";

type ExamsListProps = {
  searchParams: SearchParams;
};

export default async function ExamsList({ searchParams }: ExamsListProps) {
  // { searchParams }: ExamsListProps
  const [payload, error] = await catchError(getExamsApi);
  // console.log("ExamsList", payload);

  return (
    <section className="flex items-end flex-col">
      {/* Title */}
      <h1 className="text-3xl m-auto text-blue-800">Frontend Quiz</h1>

      {/* Exams */}
      {payload?.exams && (
        <ul className="flex flex-col gap-5 w-full">
          {payload.exams.map((exam) => (
            <li
              key={exam._id}
              className="shadow-lg flex justify-between items-center p-6"
            >
              {/* Exam */}
              <div className=" flex items-center gap-4">
                <BookCheck size={40} className="text-gray-700" />

                {/* Info */}
                <div className="flex flex-col">
                  {/* Title */}
                  <h2 className="font-semibold text-lg">{exam.title}</h2>

                  {/* Questions */}
                  <p className="text-gray-500">
                    {exam.numberOfQuestions} Questions
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                {/* Duration */}
                <p>{exam.duration} Minutes</p>

                {/* Start */}
                <QuestionsDialog searchParams={searchParams} />
                {/* searchParams={searchParams} */}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Error */}
      {error && <p className="text-red-600 text-center py-6">{error}</p>}
    </section>
  );
}
