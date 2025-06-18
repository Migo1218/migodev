import Image from "next/image";

export default function TrustedBySection() {
  return (
    <section className="bg-dark text-light py-12">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
        Worked with the worlds most innovative companies
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        {/* Cambia src y alt por los reales */}
        <Image
          src="/imgs/epam.svg"
          alt="EPAM"
          width={100}
          height={50}
          className="h-10 md:h-12 w-auto"
        />
        <Image
          src="/imgs/liberty.svg"
          alt="Liberty Mutual"
          width={100}
          height={50}
          className="h-10 md:h-12 w-auto"
        />
        <Image
          src="/imgs/cox.svg"
          alt="Cox Automotive"
          width={100}
          height={50}
          className="h-10 md:h-12 w-auto"
        />
        <Image
          src="/imgs/meltstudio.svg"
          alt="Melt Studio"
          width={100}
          height={50}
          className="h-10 md:h-12 w-auto"
        />
        <Image
          src="/imgs/litlingo.svg"
          alt="Litlingo"
          width={100}
          height={50}
          className="h-10 md:h-12 w-auto"
        />
      </div>
    </section>
  );
}
