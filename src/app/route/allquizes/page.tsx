import { Suspense } from "react";
import AllSubjects from "./_componente/allsubject";

export default function dashboard() {
  return (
    <div>
      <Suspense fallback="Loading questions...">
        <AllSubjects />
      </Suspense>
    </div>
  );
}
