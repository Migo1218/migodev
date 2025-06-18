export default function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white shadow-md rounded-xl w-full mx-auto">
      {/* Esquinas personalizadas */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-md" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-md" />

      {/* Contenido */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icono */}
        <div className="p-3 bg-primary rounded-lg inline-flex items-center justify-center">
          {icon}
        </div>

        {/* Título */}
        <h3 className="text-lg font-semibold text-dark">{title}</h3>

        {/* Descripción */}
        <p className="text-sm text-gray-500">{desc}</p>

        {/* Read More */}
        <a
          href="#"
          className="text-primary font-medium flex items-center gap-1 hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
