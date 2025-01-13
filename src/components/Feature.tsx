import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h4 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-blue-400 text-blue-900">
           Dive into Sindh's Hidden Gems: Unveiling the stories
          and splendor of its historic heart!
          <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
            Welcome to 'Sindh's Hidden Gems: A Journey Through Its Historic
            Heart'! I'm passionate about uncovering the rich history, culture,
            and architectural marvels of Sindh. Join me as I explore the
            timeless beauty and captivating stories of this enchanting region.
            Let's embark on this journey together and discover the secrets that
            lie within Sindh's historic heart.
          </p>
          <div className="mx-auto max-w-7xl px-5">
            <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change ">
              Exploring Our Catagories
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-upp delay-100 ">
              {[
                "Historical Sites",
                " Natural Wonders",
                "Cultural and Spiritual Heritage",
                " Architectural Marvels",
              ].map((category, index) => (
                <div
                  key={index}
                  className="relative group py-6 bg-white rounded-lg shadow-lg hower:bg-sky-300  hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
                >
                  <p className="text-center text-lg font-semibold">
                    {category}
                  </p>
                  <div className="absolute insert-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-2"></div>
                </div>
              ))}
            </div>
          </div>
        </h4>
      </section>
    </div>
  );
}
