"use client";

import Image from "next/image";
import Link from "next/link";

const heroItems = [
  {
    title: "What we do",
    src: "/assets/img/hero/what.PNG",
    alt: "What we do",
    path: "/what",
  },
  {
    title: "Projects",
    src: "/assets/img/hero/projects.JPG",
    alt: "Projects",
    path: "/project",
  },
  {
    title: "Contact",
    src: "/assets/img/hero/contact.JPG",
    alt: "Contact",
    path: "/contact",
  },
];

const Hero = () => {
  return (
    <header className="bg-white min-h-screen pt-[260px] sm:pt-0 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl mx-auto px-4">
        {heroItems.map((item, index) => (
          <div key={index} className="text-center">
            <Link href={item.path} className="group block">
              {/* Título - mobile (em cima da imagem) */}
              <h2 className="mb-4 font-bold tracking-[1.2px] text-lg font-primary uppercase transition-all duration-200 group-hover:font-bold block md:hidden">
                {item.title}
              </h2>

              {/* Imagem */}
              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Título - desktop (embaixo da imagem) */}
              <h2 className="mt-4 font-bold tracking-[1.2px] text-lg font-primary uppercase transition-all duration-200 group-hover:font-bold hidden md:block">
                {item.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
