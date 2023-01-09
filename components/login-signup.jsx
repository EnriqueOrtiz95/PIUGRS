import Link from "next/link";
import { useRouter } from "next/router";

const LoginSignUp = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12 md:mt-0">
      <Link href="/login" legacyBehavior>
        <a
          className={`login text-blue-700 hover:text-blue-500 ${
            router.pathname === "/login" ? " p-2" : ""
          } `}
        >
          Login
        </a>
      </Link>
      <Link legacyBehavior href="/register">
        <a
          className={`register ${
            router.pathname === "/register" ? "text-clear-blue p-2" : ""
          }`}
        >
          Register
        </a>
      </Link>
    </div>
  );
};

export default LoginSignUp;
