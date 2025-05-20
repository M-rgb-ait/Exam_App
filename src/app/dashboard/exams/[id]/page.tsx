import { getExamsApi } from "@/lib/api/exam.api";

export default async function page() {
  const respons = await getExamsApi();
  console.log("respons", respons.message);
  return (
    <div>
      <div>{respons.message}</div>
    </div>
  );
}
