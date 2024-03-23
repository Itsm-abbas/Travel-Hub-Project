"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="hidden md:flex cursor-pointer  items-center gap-2 font-semibold"
    >
      <p className="text-xl">Travel</p>
      <p className="py-1 px-2 bg-primary rounded-md text-white text-lg">hub</p>
    </div>
    // <Image
    //   onClick={() => router.push("/")}
    //   className="hidden md:block cursor-pointer"
    //   src="/images/logo-black.png"
    //   height="77"
    //   width="120"
    //   alt="Logo"
    // />
  );
};

export default Logo;
