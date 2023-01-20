import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import Link from "next/link";

const ModalConfirmation = ({ setFormSubmit, title }) => {
  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg overflow-y-scroll">
        <div className="bg-gray-form2 rounded shadow-lg max-w-[85%] w-[500px] mt-[90px] p-12 relative">
          <div className="flex justify-center items-center">
            <MdMarkEmailRead className="text-6xl text-gray-300" />
          </div>
          <h2 className="p-5 text-center text-gray-300 text-[3rem]">
            {title}
          </h2>

          <Link legacyBehavior href="/">
            <a
              className="absolute top-5 right-5 text-[2rem] p-4"
              onClick={() => {
                setFormSubmit(false);
              }}
            >
              X
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ModalConfirmation;
