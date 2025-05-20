import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <h1 className="text-2xl">
        <Link href="/route/dashboard" className="text-red-800 text-3xl underline">
          Wellcome to examapp
        </Link>
      </h1>
    </main>
  );
}
