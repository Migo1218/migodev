import React, { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiMui,
} from "react-icons/si";
// Componente para cada botón del sidebar

const TabButton = ({
  tab,
  activeTab,
  setActiveTab,
}: {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`w-full py-3 hover:cursor-pointer px-6 rounded-xl text-lg tracking-wide text-center font-medium transition-all duration-300 border-2 border-accent/20
      ${
        activeTab === tab
          ? "bg-accent/80 text-primary shadow-[0_0_15px_rgba(4,242,231,0.8)] border-accent"
          : "bg-primary/10 text-accent border-accent hover:bg-accent/10 hover:shadow-[0_0_10px_rgba(4,242,231,0.3)]"
      }`}
  >
    {tab}
  </button>
);

// Componente para cada tarjeta de experiencia
const ExperienceCard = ({
  date,
  title,
  role,
}: {
  date: string;
  title: string;
  role: string;
}) => (
  <div className="border border-accent/20 p-4 rounded-lg bg-primary/10">
    <p className="text-accent text-sm mb-1">{date}</p>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-light/70 text-sm">{role}</p>
  </div>
);

const ResumeTabs = () => {
  const [activeTab, setActiveTab] = useState("Experience");
  const tabs = ["Experience", "Education", "Skills", "About"];
  const skills = [
    { label: "React", icon: <SiReact className="text-cyan-400" /> },
    { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { label: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
    { label: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { label: "Material UI", icon: <SiMui className="text-blue-400" /> },
    { label: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
  ];
  // Esta función devuelve el contenido de la pestaña activa
  const renderContent = () => {
    switch (activeTab) {
      case "Experience":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExperienceCard
              date="Sep 2024 - Present"
              title="Sipena Logistics | Australia (Remote)"
              role="Web Developer"
            />
            <ExperienceCard
              date="Jun 2022 - Aug 2024"
              title="GSE Gestión de Seguridad Electrónica | Colombia (Remote)"
              role="Web Developer"
            />
            <ExperienceCard
              date="Jan 2022 - Apr 2022"
              title="Annar Health Technologies | Colombia (Remote)"
              role="Front End Developer"
            />
          </div>
        );
      case "Education":
        return (
          <div className="space-y-4 text-light">
            {/* Education */}
            <div className="border border-accent/20 rounded-lg p-4 bg-primary/10 shadow-md">
              <h2 className="text-xl font-bold text-accent mb-2">EDUCATION</h2>
              <h3 className="text-lg font-semibold">
                Santo Tomás de Aquino University
              </h3>
              <p className="text-light/70 text-sm italic">
                Graduate | August 2015 - October 2020
              </p>
              <p className="text-light/80 text-sm mt-1">
                Bachelor’s Degree in Telecommunication Engineering
              </p>
            </div>

            {/* Certifications */}
            <div className="border border-accent/20 rounded-lg p-4 bg-primary/10 shadow-md">
              <h2 className="text-xl font-bold text-accent mb-2">
                CERTIFICATIONS
              </h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Geek Academy (Bootcamp)
                </h3>
                <p className="text-light/70 text-sm italic">
                  Graduate | October 2021 - December 2021
                </p>
                <p className="text-light/80 text-sm mt-1">
                  Frontend Development in ReactJS and Application of Design
                  Thinking Tools
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Cisco Certified Network Associate (CCNA) - Cisco Networking
                  Academy
                </h3>
                <p className="text-light/70 text-sm italic">
                  Cisco Certified | 11 Dec 2019
                </p>
                <p className="text-light/80 text-sm mt-1">
                  Certificates: Connecting Networks, Scaling Networks, Routing
                  and Switching Essentials, Introduction to Networks
                </p>
              </div>
            </div>
          </div>
        );
      case "Skills":
        return (
          <section className="text-light space-y-6">
            <p className="text-light/70 max-w-2xl">
              My technical stack spans full-stack web development, UI design,
              cloud services, and modern tooling. Here is a snapshot of what I
              work with:
            </p>

            <div>
              <h3 className="text-lg text-accent font-semibold mb-2">
                Full Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map(({ label, icon }) => (
                  <div
                    key={label}
                    className="bg-primary/10 border border-accent/30 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-primary/20 transition"
                  >
                    <div className="text-4xl">{icon}</div>
                    <p className="text-sm text-light">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case "About":
        return (
          <section className="text-light space-y-6">
            <div className="border border-accent/20 rounded-xl p-6 bg-primary/10 shadow-md space-y-4">
              <p className="text-light/80 leading-relaxed">
                <span className="font-semibold text-accent">
                  Full-stack web developer
                </span>{" "}
                with a solid background in modern JavaScript ecosystems and UI
                libraries. Proficient in building dynamic, responsive interfaces
                using{" "}
                <span className="text-accent">React, Next.js, TailwindCSS</span>
                , and <span className="text-accent">Material UI</span>,
                combining design precision with intuitive user experience.
              </p>

              <p className="text-light/80 leading-relaxed">
                On the backend, I develop scalable APIs and services using{" "}
                <span className="text-accent">Node.js</span> and{" "}
                <span className="text-accent">MongoDB</span>, integrating tools
                like <span className="text-accent">Formik, Swagger</span>, and{" "}
                <span className="text-accent">Postman</span> to streamline data
                handling and testing. I leverage{" "}
                <span className="text-accent">Cloudinary</span> for media
                management and <span className="text-accent">GitHub</span> for
                version control, ensuring clean, maintainable, and
                production-ready code.
              </p>

              <p className="text-light/80 leading-relaxed">
                Passionate about front-end architecture, reusable components,
                and delivering polished web applications that perform and
                inspire.
              </p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen text-light flex items-center justify-center p-6 md:p-24">
      <div className="w-full max-w-7xl flex flex-col md:grid md:grid-cols-12 gap-8">
        {/* Sidebar Izquierdo */}
        <div className="flex flex-row md:flex-col overflow-x-auto gap-2 md:gap-4 col-span-12 md:col-span-4 md:self-start pt-2 md:pt-0">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        {/* Contenido Derecho */}
        <div className="col-span-12 md:col-span-8 mt-6 md:mt-0 space-y-4 px-2 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-accent text-center md:text-left">
            {activeTab}
          </h2>
          <div>{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default ResumeTabs;
