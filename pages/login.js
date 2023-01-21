import LayoutRegister from "../components/layoutRegister";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { validateLogin } from "../utils/validations";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <style jsx global>{`
        body {
          background-image: linear-gradient(
              to right,
              rgb(30 20 10 / 0.7),
              rgb(10 20 30 / 0.9)
            ),
            url(/img/login2.jpg);
        }
        .logo {
          height: 60%;
          width: 100%;
          background-image: url(/img/logo1.webp);
          opacity: 0.5;
          background-size: cover;
          background-position: 10% center;
        }
        .logo2 {
          height: 35%;
          width: 100%;
          background-image: url(/img/logo2.webp);
          opacity: 0.5;
          background-size: cover;
          background-position: 30% center;
        }
      `}</style>
      <LayoutRegister title="Login">
        <Formik
          initialValues={{
            username: "",
            password: "",
            isSecondButton: false,
          }}
          validationSchema={validateLogin}
          onSubmit={async (values, { resetForm }) => {}}
        >
          {({ errors, handleSubmit, setFieldValue }) => (
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row border-gray-form2 shadow-md border-2 border-double text-gray-BA w-[65%] md:w-[85%] lg:w-3/4 h-[600px] mx-auto mt-20  relative"
            >
              <div className="hidden md:block md:w-1/2 relative bg-gray-form2">
                <div className="logo"></div>
                <div className="logo2"></div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-blue-text-drop opacity-80 text-white p-12 h-[100%]">
                <h1 className="text-[2.5rem] font-bold mb-4 pt-10">
                  Welcome to PIUGRS
                </h1>
                <div className="mt-10">
                  <label htmlFor="username" className="block mb-6">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter Your Username:"
                    id="username"
                    className="w-full bg-white px-2 py-1 border-gray-BA border-2"
                  />
                  <ErrorMessage
                    name="username"
                    component={() => (
                      <p className="text-2xl mt-4 text-gray-BA errorInput">
                        {errors.username}
                      </p>
                    )}
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="password" className="block mb-6">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Your Password:"
                    id="password"
                    className="w-full bg-white px-2 py-1 border-gray-BA border-2"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <p className="text-2xl mt-4 text-gray-BA errorInput">
                        {errors.password}
                      </p>
                    )}
                  />
                  <div className="text-right">
                    <button
                      type="submit"
                      className="text-2xl pt-6 text-gray-black"
                      onClick={() => setFieldValue("isSecondButton", true)}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <button type="submit" className="signin-btn">
                    Sign In
                  </button>
                </div>
              </div>
              <label className="flex items-center justify-center w-[100px] absolute top-0 right-0 mb-6 z-2 text-white cursor-pointer bg-gray-form4 p-12">
                <BiArrowBack
                  className="mr-2 text-white text-[3rem] hover:text-gray-BA"
                  onClick={() => {
                    setTimeout(() => {
                      router.push("/");
                    }, 500);
                  }}
                />
              </label>
            </Form>
          )}
        </Formik>
      </LayoutRegister>
    </>
  );
};

export default Login;
