import { useState } from "react";
// import Default from "../../public/img/stomp.png"
import Modal from "./modal";

const Player = ({ player }) => {
  const [showModal, setShowModal] = useState(false);
  const { nickname } = player;
  return (
    <>
      <button
        className={`cursor-pointer ${showModal && "modal"}`}
        onClick={() => setShowModal(true)}
      >
        {nickname}
      </button>
      {showModal && <Modal setShowModal={setShowModal} player={player} />}
    </>
  );
};

export default Player;
