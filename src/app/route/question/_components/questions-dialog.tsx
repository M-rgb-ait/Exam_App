import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import catchError from "@/lib/utils/catch-error";
import { getQuestions } from "@/lib/api/question.api";
import { convertSearchParams } from "@/lib/utils/conver-search-params";
import QuestionsForm from "./questions-form";

type QuestionsDialogProps = {
  searchParams: SearchParams;
};

export default async function QuestionsDialog({
  searchParams,
}: QuestionsDialogProps) {
  const [payload, error] = await catchError(() =>
    getQuestions(convertSearchParams(searchParams).toString())
  );

  if (error) return <p>{error}</p>;

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Start
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="min-h-[550px] flex flex-col">
        {/* Header */}
        <DialogHeader className="border-b pb-2">
          {/* Title */}
          <DialogTitle>{payload?.questions[0].exam.title}</DialogTitle>

          {/* Description */}
          <DialogDescription className="justify-between flex items-center">
            {/* Questions count */}
            {payload?.questions[0].exam.numberOfQuestions} Questions
            {/* Duration */}
            <span>Duration: {payload?.questions[0].exam.duration} min</span>
            {/* Duration */}
            {/* <span>Duration: {payload?.questions[0].exam.duration} min</span> */}
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        {payload?.questions && <QuestionsForm questions={payload.questions} />}
      </DialogContent>
    </Dialog>
  );
}
