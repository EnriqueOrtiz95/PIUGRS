import Navegacion from "./navegacion";

const Footer = () => {
  return (
    <footer className="w-full px-16 py-8 bg-gray-form2 mx-auto flex flex-col md:flex-row md:justify-between items-center">
      <Navegacion />

      <p className="w-full text-center xl:clear-both copyright">
        Todos los derechos reservados {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
