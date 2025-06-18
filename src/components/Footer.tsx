import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transparent text-light text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.instagram.com/miguelhernandez1202"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/miguelangelhernandezidarraga/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Miguel Hernandez. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
