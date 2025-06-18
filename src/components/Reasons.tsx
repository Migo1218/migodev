import FeatureCard from "./FeatureCard";
import { FaBookOpen } from "react-icons/fa";

// src/components/Reasons.tsx
export default function Reasons() {
  const reasons = [
    {
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaBookOpen className="text-light w-6 h-6" />,
    },
    {
      title: "Top Guide",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaBookOpen className="text-light w-6 h-6" />,
    },
    {
      title: "Best Course",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaBookOpen className="text-light w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 bg-light text-dark h-full">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        3 Reasons To Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
        {reasons.map((reason, idx) => (
          <FeatureCard
            key={idx}
            title="hola"
            desc="descripcion"
            icon={reason.icon} // Use the icon from the reason object
          />
        ))}
      </div> */}
    </section>
  );
}
