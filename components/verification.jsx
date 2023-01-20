import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateCode } from "../utils/validations";
import LayoutAux from "./layoutAux";
import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ModalConfirmation from "./modalConfirmation";

const Verification = ({ username, setFormSubmit }) => {
  const [error, setError] = useState(false);
  const [registerDone, setRegisterDone] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <LayoutAux title="Verification">
      <Formik
        initialValues={{
          code: "",
        }}
        validationSchema={validateCode}
        onSubmit={async (values, { resetForm }) => {
          let formData = {
            Username: username,
            ConfirmationCode: values?.code.toString(),
          };
          console.log(formData);

          await Axios.post(
            "http://localhost:8000/confirmation_account",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => {
              console.log(res);
              resetForm();
              setError(false);
              setRegisterDone(true);
            })
            .catch((err) => {
              if (err.response.status === 502) {
                setError(true);
                if(document.querySelector('.alerta')) {
                  setTimeout(() => {
                  }, 2000);
                }
              }
            });
        }}
      >
        {({ errors, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className={`bg-gray-form4 border-gray-form2 shadow-md border-2 border-double text-gray-BA max-w-[600px] w-[90%] mx-auto p-12 my-24 relative ${registerDone && 'hidden'}}`}
          >
            <Field
              type="number"
              name="code"
              placeholder="Enter Your code:"
              id="code"
              className="w-full bg-white px-2 py-1"
            />
            <ErrorMessage
              name="code"
              component={() => (
                <p className="text-2xl mt-4 text-red-fond">
                  {errors.code || "El codigo es incorrecto"}
                </p>
              )}
            />
            <button type="submit" className="register-btn">
              Confirmar
            </button>
            {
              error && <p className="text-2xl mt-4 text-red-fond alerta">El codigo es incorrecto</p>
            }
          </Form>
        )}
      </Formik>
        {
          registerDone && <ModalConfirmation title={'Registro Exitoso!'} />
        }
    </LayoutAux>
  );
};

export default Verification;
