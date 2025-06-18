import React from "react";
import Image from "next/image";

const Aboutme = () => {
  return (
    <section className=" text-light h-full px-8 md:px-40 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
      {/* Imagen / Ilustración */}
      {/* <div className="absolute inset-0 bg-[url('/imgs/pattern.svg')] bg-repeat opacity-10 z-0"></div> */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <Image
          src="/imgs/space.svg"
          alt="About me"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Texto */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-light/80 mb-4">
          I am passionate about crafting{" "}
          <span className="text-accent font-semibold">
            modern web applications
          </span>{" "}
          that are not only visually appealing but also user-friendly and
          performant.
        </p>
        <p className="text-light/80 mb-4">
          I thrive on collaborating with others to create seamless digital
          experiences that meet both user needs and business goals.
        </p>
        <p className="text-light/80">
          With a focus on continuous learning and adaptability. I’m always eager
          to take on new challenges and{" "}
          <span className="text-accent font-semibold">
            drive impactful outcomes
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
