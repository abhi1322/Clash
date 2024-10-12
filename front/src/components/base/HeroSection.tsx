import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <Image
          src="/vs-illustration.svg"
          width={600}
          height={600}
          alt="banner img"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
          Clash App
        </h1>
        <p className="text-neutral-500 md:text-xl lg:text-3xl mt-2 ">
          Discover the better choice, together
        </p>
        <Link href="/login">
          <Button className="mt-8 bg-gradient-to-br px-8 rounded-xl from-cyan-300 hover:shadow-xl hover:scale-95 shadow-cyan-700/50 transition-transform ease-in-out to-blue-500">
            Start Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
