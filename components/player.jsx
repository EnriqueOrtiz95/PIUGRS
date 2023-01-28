import { useState, useEffect } from "react";
import { getCountry } from "../pages/api/allCountries";
import Modal from "./modal";
import Image from "next/image";

const Player = ({ player }) => {
  const [showModal, setShowModal] = useState(false);
  const { nickname, photo: Photo, country } = player;

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const countries = await getCountry(country);
      setCountries(countries);
    };
    fetchCountry();
  }, [country]);
  return (
    <>
      <div>
        <Image
          src={Photo || "/img/stomp.jpg"}
          alt={`Img`}
          width={50}
          height={50}
          className={`rounded-[50%] border-gray-BA border-2 inline-block cursor-pointer ${
            showModal && "modal"
          }`}
          onClick={() => setShowModal(true)}
        />
        <button
          className={`cursor-pointer ml-6 player-color ${showModal && "modal"}`}
          onClick={() => setShowModal(true)}
        >
          {nickname}
        </button>
        {showModal && <Modal setShowModal={setShowModal} player={player} countries={countries} />}
      </div>
    </>
  );
};

export default Player;
