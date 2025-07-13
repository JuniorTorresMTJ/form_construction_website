"use client";

import Image from "next/image";

const images = [
  "/assets/img/services/extensions/extensions-1.jpg",
  "/assets/img/services/extensions/extensions-2.jpg",
  "/assets/img/services/extensions/extensions-3.jpg",
];

export default function ExtensionsPage() {
  return (
    <main className="bg-white min-h-screen pt-[220px] md:pt-[250px] px-4 py-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold font-primary text-center mb-12">
        Extensions
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
        <p className="text-base font-sans leading-relaxed">
        If you are looking at increasing space to your home, whether it is for an extra bedroom, a bigger kitchen or living area, all it takes is a quick call to our team and we will arrange for one of our surveyors to visit you and your home to assess the feasibility of a home extension.
        </p>
        <p>
        During this meeting, you will have the chance to ask lots of questions and go through the different possibilities and costs for your extension project. A detailed fixed priced quotation will be sent to you within seven days. 
        </p>
        <p>Our team of architects and builders will work together to bring your vision to life.</p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => {
          const isFirstImageWebp = src.includes("extensions-1.webp");
          return (
            <div
              key={index}
              className={`w-full aspect-square relative ${
                isFirstImageWebp ? "hidden md:block" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Feature ${index + 1}`}
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
