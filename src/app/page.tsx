import Link from "next/link";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-3">
      <p>Home Page</p>
      <div className="flex gap-3 text-xs text-blue-600">
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </main>
  );
}
