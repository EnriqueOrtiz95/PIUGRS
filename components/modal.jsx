const Modal = ({ setShowModal, player }) => {
  const { nickname, fullname, age, start_date, type_category, elo, photo } = player;
  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg overflow-y-scroll ">
        <div className="bg-gray-form2 rounded shadow-lg w-full max-w-[400px] mt-[90px] relative">
          <h2 className="p-5 text-center text-gray-300 text-[3rem]">
            {nickname}
          </h2>
          <button
            className="absolute top-5 right-5 text-2xl p-4"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
          <div className="player-photo">
            <style jsx>
              {
                `
                  .player-photo {
                    background-image: url(${photo});
                    background-size: cover;
                    background-position: center center;
                    width: 100%;
                    height: 50vh;
                  }
                `
              }
            </style>
          </div>
          <div className="flex flex-col justify-center py-8 px-12 text-orange-button">
            <p>
              Category:{" "}
              <span className="ml-6 text-gray-BA">{type_category}</span>
            </p>
            <p>
              Name: <span className="ml-6 text-gray-BA">{fullname}</span>
            </p>
            <p>
              Age: <span className="ml-6 text-gray-BA">{age}</span>
            </p>
            <p>
              Start Date:{" "}
              <span className="ml-6 text-gray-BA">{start_date}</span>
            </p>
            <p>
              ELO: <span className="ml-6 text-gray-BA">{elo}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
