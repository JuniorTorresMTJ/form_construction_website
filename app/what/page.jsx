"use client";

import Image from "next/image";
import Link from "next/link";

const serviceItems = [
  {
    title: "Extensions",
    src: "/assets/img/services/extensions-1.jpg",
    alt: "Extensions",
    href: "/what/extensions",
  },
  {
    title: "Refurbishments",
    src: "/assets/img/services/refurbishments-1.jpg",
    alt: "Refurbishments",
    href: "/what/refurbishments",
  },
  {
    title: "Period Restoration",
    src: "/assets/img/services/restoration-1.jpg",
    alt: "Period Restoration",
    href: "/what/restoration",
  },
];

const WhatWeDoPage = () => {
  return (
    <main className="bg-white min-h-screen pt-[220px] md:pt-[250px] flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-3xl font-bold font-primary text-center mb-8">What We Do</h1>
      <p className="text-center mb-8">
          We love the work we do.
        </p>
      {/* Texto introdutório */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
        <p>
          Bringing a wealth of experience, we work with our clients and their professional team. Taking into account their brief, purpose of the project, their property and budget.
        </p>
        <p>
          Our projects include new builds, extensions and the renovation of listed properties. We have extensive and established relationships with reliable and quality trades people and carefully curated suppliers.
        </p>
        <p>
          We have Public Liability Insurance which means you are protected in the unlikely event of any accidental harm or damage coming to you or your personal property. You can be sure that your safety and the care of your belongings is our top priority. We take all appropriate measures to ensure that our work is carried out responsibly.
        </p>
      </div>

      {/* Galeria de serviços com links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl items-center justify-center">
        {serviceItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="group text-center block"
          >
            <h2 className="mb-4 font-bold text-lg font-primary transition-all uppercase duration-200 group-hover:font-bold">
              {item.title}
            </h2>
            <div className="w-full aspect-square relative overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default WhatWeDoPage;
