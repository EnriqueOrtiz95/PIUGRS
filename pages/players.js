import Layout from "../components/layout";
import Player from "../components/player";
import { useState, useEffect } from "react";

const Players = ({ players }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isELO, setIsELO] = useState(false);
  const [isCountry, setIsCountry] = useState(false);
  const [isPlayerList, setIsPlayerList] = useState(false);

  useEffect(() => {
    setLoading();
  }, []);


  const setLoading = () => {
    if(players?.length) {
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <Layout title={"Players"} description={"List of PIU Players"}>
      <div className="w-[95%] mx-auto px-16 py-8 bg-gray-form4 my-[5rem]">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="p-4 md:py-2 mx-auto text-gray-BA hover:bg-gray-form">
            <button
              onClick={() => {
                setIsELO(false);
                setIsPlayerList(true);
              }}
            >
              Player List
            </button>
          </div>
          <div className="p-4 md:py-2 mx-auto text-gray-BA hover:bg-gray-form">
            <button
              onClick={() => {
                setIsELO(true);
                setIsPlayerList(false);
              }}
            >
              Top ELOs
            </button>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto px-16 py-8 bg-gray-form4 my-[5rem]">
        <h2 className="heading text-red-fond">Players</h2>

        {players?.length && (
          <div className="grid gridPlayers-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white">
            {players
              .sort((a, b) => {
                if (isELO) {
                  return b.elo - a.elo;
                }
                if (isPlayerList) {
                  return a.nickname > b.nickname ? 1 : -1;
                }
              })
              .map((player) => (
                <Player key={player.pumper_id} player={player} />
              ))}
          </div>
        )}
        {
          <h1 className="text-white text-3xl text-center">
            {
              isLoading ? "Loading..." : !players?.length && "No players found"
            }
          </h1>
        }
      </div>
    </Layout>
  );
};

export default Players;

export async function getStaticProps() {
  try {
    const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pumper/list`);
    if (!respuesta.ok) {
      return { notFound: true };
    }
    const players = await respuesta.json();
    return {
      props: {
        players,
      },
    };
  } catch (error) {
    return {
      props: {
        notFound: true,
      },
    };
  }
}
