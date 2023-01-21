import Link from "next/link";
import Navegacion from "./navegacion";
import LoginSignUp from "./login-signup";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 1200 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [isOpen]);
  return (
      <div className="nav w-full px-16 pt-8 bg-gray-fom3 mx-auto flex flex-col xl:flex-row xl:justify-between items-center">
        <Link legacyBehavior href="/">
          <a className="logo">
            <p className="text-purple">
              PIU<span className="text-white"> - GRS</span>
            </p>
          </a>
        </Link>
        <Navegacion isOpen={isOpen} />
        <LoginSignUp isOpen={isOpen} />
        <FaBars
          className={`${
            isOpen && window.innerWidth < 1200 ? "fa-bars fa-xmark" : "fa-bars"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
  );
};

export default Header;
