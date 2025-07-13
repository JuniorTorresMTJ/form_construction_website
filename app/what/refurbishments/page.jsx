"use client";

import Image from "next/image";

const images = [

  "/assets/img/services/refurbishments/refurbishments-1.JPG",
  "/assets/img/services/refurbishments/refurbishments-2.JPG",
  "/assets/img/services/refurbishments/refurbishments-3.JPG",
];

export default function RefurbishmentsPage() {
  return (
    <main className="bg-white min-h-screen pt-[230px] py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold font-primary text-center mb-12">Refurbishments</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
        <p className="text-base font-sans leading-relaxed">
          If you are considering updating your home or commercial premises, we are here to help!
        </p>
        <p>
          Energy upgrades including insulation heating windows and doors or solar solutions, can increase the value and comfort of your home or commercial premises.  We are happy to offer design advice and coatings to help bring your ideas to life.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => {
          const isrefurbishments3 = src.includes("refurbishments-3.jpg"); // ou index === 5
          return (
            <div
              key={index}
              className={`w-full aspect-square relative ${isrefurbishments3 ? "hidden md:block" : ""}`}
            >
              <Image
                src={src}
                alt={`refurbishments ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
