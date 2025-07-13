"use client";

import Image from "next/image";

const images = [
  "/assets/img/services/restoration/restoration-1.jpg",
  "/assets/img/services/restoration/restoration-2.jpg",
  "/assets/img/services/restoration/restoration-3.jpg",
];

export default function RestorationPage() {
  return (
    <main className="bg-white min-h-screen pt-[230px] px-4 py-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold font-primary text-center mb-12">Period Restoration</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
        <p>
        Through many years of experience Form Construction has developed the knowledge and skill to renovate some of Dublin’s finest period properties. Knowing how these properties are constructed and how they can be brought to modern standards is an art.
        </p>
        <p>
        We specialise in building dream homes from these properties. We know the planning and rules around listed buildings can be daunting, we are here to help.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-full aspect-square relative">
            <Image
              src={src}
              alt={`restoration ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
