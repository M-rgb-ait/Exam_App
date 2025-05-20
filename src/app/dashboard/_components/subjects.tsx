import { JSON_HEADER } from "@/lib/constants/api.constants";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function SubjectsApi() {
  const authCookie = cookies().get("next-auth.session-token")?.value;
  const token = await decode({
    token: authCookie,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  const respones = await fetch(`${process.env.API}/subjects`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      token: token?.token || "",
    },
  });

  const payload = await respones.json(); // No type
  // console.log("SubjectsApi", payload);
  const subjects = payload.subjects;
  if (!respones.status) {
    <p>Loding.......</p>;
  }
  return (
    <div className=" container mx-auto p-5 bg-white">
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-9">
        {subjects?.map((subject) => (
          <Link key={subject._id} href={`/dashboard/exams/${subject._id}`}>
            <div className="relative">
              <img src={subject.icon} className=" w-full h-full" alt={subject.name} />
              <div
                className="bg-[#1935CA66] w-[90%] p-5 rounded-md top-[50%] left-[50%] 
          transform -translate-x-1/2 -translate-y-1/5
          absolute">
                <h2 className="font-bold text-base">{subject.name}</h2>
                <p className="font-medium text-sm">Voluptatem aut ut dignissimos blanditiis</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
