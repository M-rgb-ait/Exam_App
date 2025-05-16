import Link from "next/link";

export default function LinkForm() {
  return (
    <div>
      <ul className="flex justify-end gap-7">
        <Link
          href={"/auth/login"}
          className="w-5xl font-bold text-blue-600 p-2 "
        >
          Sing-in
        </Link>
        <Link
          href={"/auth/register"}
          className="w-5xl text-blue-600 border-[1px] p-2 rounded-2xl"
        >
          Regester
        </Link>
      </ul>
    </div>
  );
}
