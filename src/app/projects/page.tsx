"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";
import { SiVite } from "react-icons/si";
import type { IconType } from "react-icons";

interface Project {
  title: string;
  description: string;
  imageSuper: string;
  imageSmall?: string;
  liveUrl?: string;
  repoUrl: string;
  techIcons: IconType[];
}

const projects: Project[] = [
  {
    title: "Tic Tac Toe Game",
    description:
      "A modern Tic Tac Toe game built with React, TypeScript, and Zustand for state management. Includes smooth animations with Framer Motion and styled using Tailwind CSS.",
    imageSuper: "/imgs/tictacgame.png",
    imageSmall: "/imgs/tictacmain.png",
    liveUrl: "https://tic-tac-toe-game-ashy-beta.vercel.app/",
    repoUrl: "https://github.com/Migo1218/TicTacToe_Game",
    techIcons: [SiReact, SiTypescript, SiTailwindcss, SiVite],
  },

  {
    title: "Connect Four Game",
    description:
      "A fun and colorful two-player strategy game where players take turns dropping discs into a vertical grid. The goal is to connect four of your own pieces in a row — horizontally, vertically, or diagonally — before your opponent does.",
    imageSuper: "/imgs/connectfourgame.png",
    liveUrl: "https://connect-four-game-kohl.vercel.app/",
    repoUrl: "https://github.com/Migo1218/ConnectFourGame",
    techIcons: [SiReact, SiRedux, SiTailwindcss, SiVite],
  },
];

export default function ProjectsPage() {
  const [index, setIndex] = useState(0);
  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  return (
    <section
      id="projects"
      className="bg-primary/10 h-screen py-16 flex items-center justify-center"
    >
      <div className="w-full pb-24 pt-24 max-w-5xl relative px-4">
        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(
              _: MouseEvent | TouchEvent | PointerEvent,
              info: import("framer-motion").PanInfo
            ) => {
              if (info.offset.x < -100) next();
              else if (info.offset.x > 100) prev();
            }}
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center gap-8"
              >
                {/* Texto */}
                <div className="lg:w-1/2 text-center lg:text-left relative">
                  <span className="absolute md:top-35 top-20 left-0 text-[140px] text-accent opacity-5 -z-10 font-bold select-none">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-semibold gap-5 text-light flex justify-center lg:justify-start items-center relative z-10">
                    {p.title}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:opacity-80"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light hover:opacity-80"
                    >
                      <FaGithub />
                    </a>
                  </h3>
                  <p className="mt-4 text-light/70">{p.description}</p>

                  <div className="mt-6">
                    <h4 className="text-light text-2xl font-medium mb-2 text-center lg:text-left">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {p.techIcons.map((Icon, j) => (
                        <div
                          key={j}
                          className="h-10 w-10 bg-card-dark rounded-lg flex items-center justify-center"
                        >
                          <Icon className="text-light text-2xl" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Imagen */}
                <div className="relative md:w-1/2 lg:h-96">
                  {/* Imagen grande de fondo */}
                  <div className="w-full h-64 lg:h-96 relative">
                    <Image
                      src={p.imageSuper}
                      alt="Oficina grande"
                      objectFit="cover"
                      className="rounded-xl shadow-md"
                      width={700}
                      height={300}
                    />
                  </div>

                  {/* Imagen pequeña superpuesta */}
                  {p.imageSmall && (
                    <div className="absolute bottom-4 right-2 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-xl rounded-xl overflow-hidden">
                      <Image
                        src={p.imageSmall}
                        alt="Persona analizando datos"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Flechas */}
        <div className="absolute bottom-2 hover:cursor-pointer  left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prev}
            className="p-2 bg-card-dark rounded-full hover:bg-card transition"
          >
            <FiChevronLeft className="text-accent text-2xl cursor-pointer" />
          </button>

          <div className="flex items-center space-x-2">
            {projects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setIndex(dotIdx)}
                className={`h-2 w-2 rounded-full transition ${
                  dotIdx === index ? "bg-accent" : "bg-light/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 bg-card-dark rounded-full hover:bg-card transition"
          >
            <FiChevronRight className="text-accent text-2xl cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { SiReact, SiTailwindcss, SiTypescript, SiRedux, SiVite } from "react-icons/si";
// import type { IconType } from "react-icons";

// interface Project {
//   title: string;
//   description: string;
//   imageSuper: string;
//   imageSmall?: string;
//   liveUrl?: string;
//   repoUrl: string;
//   techIcons: IconType[];
// }

// const projects: Project[] = [
//   {
//     title: "Tic Tac Toe Game",
//     description:
//       "A modern Tic Tac Toe game built with React, TypeScript, and Zustand for state management. Includes smooth animations with Framer Motion and styled using Tailwind CSS.",
//     imageSuper: "/imgs/tictacgame.png",
//     imageSmall: "/imgs/tictacmain.png",
//     liveUrl: "https://tic-tac-toe-game-ashy-beta.vercel.app/",
//     repoUrl: "https://github.com/Migo1218/TicTacToe_Game",
//     techIcons: [SiReact, SiTypescript, SiTailwindcss, SiVite],
//   },
//   {
//     title: "Connect Four Game",
//     description:
//       "A fun and colorful two-player strategy game where players take turns dropping discs into a vertical grid. The goal is to connect four of your own pieces in a row — horizontally, vertically, or diagonally — before your opponent does.",
//     imageSuper: "/imgs/connectfourgame.png",
//     repoUrl: "https://github.com/Migo1218/ConnectFourGame",
//     liveUrl: "https://connect-four-game-kohl.vercel.app/",
//     techIcons: [SiReact, SiRedux, SiTailwindcss, SiVite],
//   },
// ];

// export default function ProjectsPage() {
//   const [index, setIndex] = useState(0);
//   const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
//   const next = () => setIndex((i) => (i + 1) % projects.length);

//   return (
//     <section
//       id="projects"
//       className="bg-primary/10 min-h-screen py-16 flex items-center justify-center"
//     >
//       <div className="w-full max-w-5xl relative px-4">
//         {/* Slider */}
//         <div className="overflow-hidden">
//           <motion.div
//             className="flex"
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(
//               _: MouseEvent | TouchEvent | PointerEvent,
//               info: import("framer-motion").PanInfo
//             ) => {
//               if (info.offset.x < -100) next();
//               else if (info.offset.x > 100) prev();
//             }}
//             animate={{ x: `-${index * 100}%` }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             {projects.map((p, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center gap-8"
//               >
//                 {/* Text Section */}
//                 <div className="w-full lg:w-1/2 text-center lg:text-left relative">
//                   {/* <span className="absolute top-35 left-0 text-[80px] sm:text-[120px] text-accent opacity-5 -z-10 font-bold select-none">
//                     0{i + 1}
//                   </span> */}
//                   <span className="absolute md:top-35 top-20 left-0 text-[140px] text-accent opacity-5 -z-10 font-bold select-none">
//                      0{i + 1}
//                   </span>
//                   <h3 className="text-2xl font-semibold gap-3 text-light flex justify-center lg:justify-start items-center relative z-10">
//                     {p.title}
//                     {p.liveUrl && (
//                       <a
//                         href={p.liveUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-accent hover:opacity-80 ml-2"
//                       >
//                         <FaExternalLinkAlt />
//                       </a>
//                     )}
//                     <a
//                       href={p.repoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-light hover:opacity-80 ml-2"
//                     >
//                       <FaGithub />
//                     </a>
//                   </h3>
//                   <p className="mt-4 text-light/70 text-sm sm:text-base">{p.description}</p>

//                   <div className="mt-6">
//                     <h4 className="text-light text-xl font-medium mb-2 text-center lg:text-left">
//                       Tech Stack
//                     </h4>
//                     <div className="flex flex-wrap justify-center lg:justify-start gap-2">
//                       {p.techIcons.map((Icon, j) => (
//                         <div
//                           key={j}
//                           className="h-10 w-10 bg-card-dark rounded-lg flex items-center justify-center"
//                         >
//                           <Icon className="text-light text-xl" />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="w-full lg:w-1/2 relative">
//                   <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 relative rounded-xl overflow-hidden shadow-md">
//                     <Image
//                       src={p.imageSuper}
//                       alt={p.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   {/* {p.imageSmall && (
//                     <div className="absolute bottom-4 right-2 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 shadow-xl rounded-xl overflow-hidden">
//                       <Image
//                         src={p.imageSmall}
//                         alt="Preview"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   )} */}
//                   {p.imageSmall && (
//                      <div className="absolute bottom-4 right-2 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-xl rounded-xl overflow-hidden">
//                        <Image
//                         src={p.imageSmall}
//                          alt="Persona analizando datos"
//                          layout="fill"
//                         objectFit="cover"
//                        />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Navigation Arrows */}
//        <div className="mt-8 flex justify-center items-center space-x-4">
//   <button
//     onClick={prev}
//     className="p-2 bg-card-dark rounded-full hover:bg-card transition"
//   >
//     <FiChevronLeft className="text-accent text-2xl cursor-pointer" />
//   </button>

//   <div className="flex items-center space-x-2">
//     {projects.map((_, dotIdx) => (
//       <button
//         key={dotIdx}
//         onClick={() => setIndex(dotIdx)}
//         className={`h-2 w-2 rounded-full transition ${
//           dotIdx === index ? "bg-accent" : "bg-light/50"
//         }`}
//       />
//     ))}
//   </div>

//   <button
//     onClick={next}
//     className="p-2 bg-card-dark rounded-full hover:bg-card transition"
//   >
//     <FiChevronRight className="text-accent text-2xl cursor-pointer" />
//   </button>
// </div>
//       </div>
//     </section>
//   );
// }
