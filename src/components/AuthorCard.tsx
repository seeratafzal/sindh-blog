import React from "react";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <div className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-900">
          <Image
            src="/images/picture.jpeg"
            alt="Author Image"
            objectFit="cover"
            className="rounded-full"
            height={64}
            width={64}
          />
        </div>

        <div>
          <h3 className="text-xl font-bold">Seerat</h3>
          <p className="text-slate-400">HTML | CSS | TypeScript | Next.JS </p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed">
        I'm Seerat! 🌟 I have complete my Master's from Karachi University now I
        am GIAIC student and web development enthusiast. Proficient in HTML,
        CSS, and TypeScript, I'm currently exploring Next.js to build dynamic
        web applications.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-400 transition duration-300"
        >
         Twitter
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-400 transition duration-300"
        >
         Linkin
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-400 transition duration-300"
        >
         GitHub
        </a>
      </div>
    </div>
  );
}
