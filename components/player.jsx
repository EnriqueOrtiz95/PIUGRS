import { useState } from "react";
import Default from "../public/img/stomp.jpg";
import Modal from "./modal";
import Image from "next/image";

const Player = ({ player }) => {
  const [showModal, setShowModal] = useState(false);
  const { nickname, photo: Photo } = player;
  return (
    <>
      <div>
        <Image
          src={Photo.toString() || Default}
          alt={`Pumper Img`}
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
        {showModal && <Modal setShowModal={setShowModal} player={player} />}
      </div>
    </>
  );
};

export default Player;
