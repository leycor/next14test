import Link from "next/link";

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('ME EJECUTÉ') // NO SE EJECUTA 
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-3">
      <p>About Page</p>
      <div className="flex gap-3 text-xs text-blue-600">
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </main>
  );
}
