import Layout from "../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { validate } from "../utils/validations";
import Default from "../public/img/stomp.jpg";
import { BsUpload } from "react-icons/bs";
import Image from "next/image";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  return (
    <Layout title={"Register"}>
      <Formik
        initialValues={{
          nickname: "",
          fullname: "",
          age: "",
          email: "",
          start_date: 2000,
          type_category: "",
          password: "",
          passwordConfirmed: "",
          photo: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values)
          resetForm();
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ errors, handleSubmit, isSubmitting }) => (
          <Form
            action="/pumper/add"
            method="POST"
            autoComplete="off"
            onSubmit={handleSubmit}
            className="bg-gray-form4 border-gray-form2 shadow-md border-2 border-double text-gray-BA max-w-[600px] w-[90%] mx-auto p-12 my-24 relative"
          >
            <h2 className="heading text-red-fond">Pumper Register</h2>
            <div className="mb-8">
              <Field
                type="file"
                name="photo"
                accept="image/*"
                id="photo"
                className="hidden"
                onChange={({target: {files}}) => {
                  files[0] && setFileName(files[0].name);
                  files && setImage(URL.createObjectURL(files[0]));
                }}
              />
              <label
                htmlFor="photo"
                className="flex items-center justify-center w-[100px] h-[100px] absolute top-0 left-0 mb-6 text-white cursor-pointer bg-gray-form4 p-6"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={fileName}
                    width={100}
                    height={100}
                  />
                ) : (
                  <div>
                    <BsUpload className="mr-2 text-white text-[3rem] hover:text-gray-BA" />
                  </div>
                )}
              </label>
            </div>
            <div className="mb-8">
              <label htmlFor="nickname" className="block mb-6 text-purple">
                Nickname
              </label>
              <Field
                type="text"
                name="nickname"
                placeholder="Enter Your Nickname:"
                id="nickname"
                className="w-full bg-white px-2 py-1 border-gray-BA border-2"
              />
              <ErrorMessage
                name="nickname"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond errorInput">
                    {errors.nickname}
                  </p>
                )}
              />
            </div>
            <div>
              <label
                htmlFor="fullname"
                className="block mb-6 mt-10 text-purple"
              >
                Fullname
              </label>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter Your Fullname:"
                id="fullname"
                className="w-full bg-white px-2 py-1"
              />
              <ErrorMessage
                name="fullname"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">
                    {errors.fullname}
                  </p>
                )}
              />
            </div>
            <div>
              <label htmlFor="age" className="block mb-6 mt-10 text-purple">
                Age
              </label>
              <Field
                type="number"
                name="age"
                placeholder="Enter Your Age:"
                id="age"
                className="w-full bg-white px-2 py-1"
              />
              <ErrorMessage
                name="age"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">{errors.age}</p>
                )}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-6 mt-10 text-purple">
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Your email:"
                id="email"
                className="w-full bg-white px-2 py-1"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">{errors.email}</p>
                )}
              />
            </div>
            <div>
              <label
                htmlFor="start_date"
                className="block mb-6 mt-10 text-purple"
              >
                Year you begun playing
              </label>
              <Field
                type="number"
                name="start_date"
                placeholder="Enter the year you begun playing:"
                id="start_date"
                min="2000"
                max="2023"
                className="w-full bg-white px-2 py-1"
              />
              <ErrorMessage
                name="start_date"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">
                    {errors.start_date}
                  </p>
                )}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-6 mt-10 text-purple"
              >
                Category
              </label>
              <Field
                as="select"
                name="type_category"
                id="type_category"
                className="w-full bg-white px-2 py-1"
              >
                <option value="0" disabled>
                  -- Select Category --{" "}
                </option>
                <option value="M">Speed Masculino</option>
                <option value="F">Speed Femenino</option>
                <option value="FS">Free Style</option>
              </Field>
              <ErrorMessage
                name="email"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">{errors.email}</p>
                )}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-6 mt-10 text-purple"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter Your password:"
                id="password"
                className="w-full bg-white px-2 py-1"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">
                    {errors.password}
                  </p>
                )}
              />
            </div>
            <div>
              <label
                htmlFor="passwordConfirmed"
                className="block mb-6 mt-10 text-purple"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                name="passwordConfirmed"
                placeholder="Confirm Your password:"
                id="passwordConfirmed"
                className="w-full bg-white px-2 py-1"
              />
              <ErrorMessage
                name="passwordConfirmed"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">
                    {errors.passwordConfirmed}
                  </p>
                )}
              />
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
            {isSubmitting && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Register;
