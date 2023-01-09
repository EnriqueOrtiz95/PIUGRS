import Link from "next/link";
import { useRouter } from "next/router";

const Navegacion = ({ isOpen }) => {
  const router = useRouter();
  return (
    <nav
      className={`flex flex-col xl:flex-row gap-8 items-center justify-between" ${
        isOpen ? "" : "hide"
      }`}
    >
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "text-clear-blue p-2" : ""}>
          Home
        </a>
      </Link>
      <Link legacyBehavior href="/players">
        <a
          className={
            router.pathname === "/players" ? "text-clear-blue p-2" : ""
          }
        >
          Players
        </a>
      </Link>
      <Link legacyBehavior href="/globalscores">
        <a
          className={
            router.pathname === "/globalscores" ? "text-clear-blue p-2" : ""
          }
        >
          Global Scores
        </a>
      </Link>
      <Link legacyBehavior href="/playerscores">
        <a
          className={
            router.pathname === "/playerscores" ? "text-clear-blue p-2" : ""
          }
        >
          Player Scores
        </a>
      </Link>
      <Link legacyBehavior href="/ranking">
        <a
          className={
            router.pathname === "/ranking" ? "text-clear-blue p-2" : ""
          }
        >
          Ranking
        </a>
      </Link>
      <Link legacyBehavior href="/events">
        <a
          className={router.pathname === "/events" ? "text-clear-blue p-2" : ""}
        >
          Events
        </a>
      </Link>
    </nav>
  );
};

export default Navegacion;
