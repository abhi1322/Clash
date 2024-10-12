import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen justify-center items-center flex flex-col ">
      <Image
        src="/404-Error.svg"
        alt="error illustration"
        width={600}
        height={600}
      />
      <h2 className="text-4xl font-bold bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Not Found
      </h2>
      <p className="text-neutral-400">Could not find requested resource</p>
      <Link
        href="/"
        className="mt-4 text-blue-500 underline underline-offset-2"
      >
        Return Home
      </Link>
    </div>
  );
}
