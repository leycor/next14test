import Link from "next/link";

export default async function Contact() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-3">
      <p>Contact Page</p>
      <div className="flex gap-3 text-xs text-blue-600">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </main>
  );
}
