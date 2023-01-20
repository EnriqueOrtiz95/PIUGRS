import { useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { useRouter } from "next/router";

const ModalConfirmation = ({ setFormSubmit, setResendCode, title, registerDone }) => {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();
  return (
    <>
      {isOpen && (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg overflow-y-scroll">
          <div className="bg-gray-form2 rounded shadow-lg max-w-[85%] w-[500px] mt-[90px] p-12 relative">
            <div className="flex justify-center items-center">
              <MdMarkEmailRead className="text-6xl text-gray-300" />
            </div>
            <h2 className="p-5 text-center text-gray-300 text-[3rem]">
              {title}
            </h2>

              <a
                className="absolute top-5 right-5 text-[2rem] p-4 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  setResendCode(false);
                  if(registerDone){
                    setFormSubmit(false);
                    router.push("/");
                  }
                }}
              >
                X
              </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalConfirmation;
