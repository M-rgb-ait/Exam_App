import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center">
      {/* Headline */}
      <h1 className="text-red-500 font-bold text-9xl">404</h1>

      {/* Description */}
      <p>Page not found.</p>

      {/* Action */}
      <Link href="/">Go to homepage</Link>
    </main>
  );
}
