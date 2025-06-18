"use client";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
export default function Hero() {
  return (
    <section className="relative h-screen  text-primary px-8 md:px-40 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
      {/* Texto a la izquierda */}
      <div className="flex-1 md:order-1 order-2">
        <h1 className="text-4xl text-light md:text-5xl font-bold mb-4">
          Let’s turn your ideas into{" "}
          <span className="text-accent">digital realities</span>!
        </h1>
        <p className="text-light mb-6 max-w-md">
          I excel at creating modern web solutions that deliver exceptional
          results. Let’s connect and bring your vision to life!
        </p>
        <a
          href="https://drive.google.com/file/d/184JWEUz5zhWRa0V3szov8YForYKT5L0q/view?usp=sharing"
          className="flex space-x-4 mb-6"
          target="_blank"
        >
          <button className="flex hover:cursor-pointer hover:border-accent items-center gap-2 border border-light text-light font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-accent hover:text-primary">
            Explore My Resume
            <LuExternalLink />
          </button>
        </a>
        <div className="flex space-x-6 mt-6 text-light text-2xl">
          <a
            href="https://www.instagram.com/miguelhernandez1202"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/miguelangelhernandezidarraga/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="flex-1 flex justify-center md:order-2 order-1">
        <Image
          src="/imgs/devilus2.svg"
          alt="Profile"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
