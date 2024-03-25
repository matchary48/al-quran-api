import Link from "next/link";
import * as React from "react";

const dataMenu = [
  {
    name: "Al-Quran",
    href: "/quran",
  },
  {
    name: "Doa",
    href: "/doa",
  },
  {
    name: "Hadist",
    href: "/hadist",
  },
];
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-4 p-4">
      <div className="flex justify-center items-center bg-slate-400 w-full h-[300px] rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src="/bg.jpg"
            alt="Selamat datang"
            width={1600}
            height={300}
            objectFit="cover"
            className="rounded-lg h-full "
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-xl md:text-4xl font-bold text-center text-white">
              Selamat datang di website pintar mengaji
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
        {dataMenu.map((menu, index) => {
          return (
            <Link
              key={index}
              href={menu.href}
              className="bg-slate-500 w-[300px] h-[200px] flex items-center justify-center rounded-lg"
            >
              <h1 className="text-xl">{menu.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
