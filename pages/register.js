// import Layout from "../components/layout";
import LayoutRegister from "../components/layoutRegister";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { validate } from "../utils/validations";
import { BsUpload } from "react-icons/bs";
import ModalConfirmation from "../components/modalConfirmation";
import Image from "next/image";
import Axios from "axios";
import Verification from "../components/verification";

const Register = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [formSubmit, setFormSubmit] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setFileName(file);
  };
  return (
    <LayoutRegister title="Register">
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
        onSubmit={async (values, { resetForm }) => {
          let formData = {
            nickname: values?.nickname,
            fullname: values?.fullname,
            age: values?.age,
            email: values?.email,
            start_date: values?.start_date,
            type_category: values?.type_category,
            password: values?.passwordConfirmed,
            photo: fileName,
          };
          setUsername(values?.email);

          setImage(null);
          await Axios.post(`http://127.0.0.1:8000/pumper/add`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
            .then((res) => {
              console.log(res);
              setUserExists(false);
              setFormSubmit(true);
              resetForm();
              // router.push("/verification");
            })
            .catch((err) => {
              if (err.response.status === 409) {
                setUserExists(true);
                console.log("Ya existe un usuario con ese email!");
              }
            });
        }}
      >
        {({ errors, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className={`bg-gray-form4 border-gray-form2 shadow-md border-2 border-double text-gray-BA max-w-[600px] w-[90%] mx-auto p-12 my-24 relative ${
              formSubmit && !userExists && "hidden"
            } `}
          >
            <h2 className="heading text-red-fond">Pumper Register</h2>
            <div className="mb-8">
              <Field
                type="file"
                name="photo"
                accept="image/*"
                id="photo"
                className="hidden"
                onChange={(e) => {
                  handleFile(e);
                }}
              />
              <ErrorMessage
                name="nickname"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond errorInput">
                    {errors.photo}
                  </p>
                )}
              />
              <label
                htmlFor="photo"
                className="flex items-center justify-center w-[100px] h-[100px] absolute top-0 left-0 mb-6 text-white cursor-pointer bg-gray-form4 p-6"
              >
                {image ? (
                  <Image src={image} alt={fileName} width={100} height={100} />
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
                name="type_category"
                component={() => (
                  <p className="text-2xl mt-4 text-red-fond">
                    {errors.type_category}
                  </p>
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
            {userExists && <ModalConfirmation title="User already exists" />}
          </Form>
        )}
      </Formik>
      {formSubmit && !userExists && (
        <Verification username={username} setFormSubmit={setFormSubmit} />
      )}
    </LayoutRegister>
  );
};

export default Register;
