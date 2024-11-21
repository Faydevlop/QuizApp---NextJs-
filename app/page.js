import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex space-x-4">
        <Link href="/student">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Student</button>
        </Link>
        <Link href="/instructor">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Instructor</button>
        </Link>
      </div>
    </main>
  );
}
