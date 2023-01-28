import Layout from "../components/layout";
import Player from "../components/player";
import { useState, useEffect } from "react";
import SkeletonPlayers from "../components/skeleton/skeletonPlayers";

const Players = ({ players, playersLength }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isELO, setIsELO] = useState(false);
  const [isCountry, setIsCountry] = useState(false);
  const [isPlayerList, setIsPlayerList] = useState(false);

  useEffect(() => {
    if(players?.length) {
      setIsLoading(false);
      return;
    }
  }, [players]);

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

        {isLoading ? (
          SkeletonPlayers(playersLength)
        ) : players?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white">
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
        ) : (
          <div className="text-white text-center">
            <h2 className="text-2xl">No players found</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Players;

export async function getStaticProps() {
  try {
    const pumpersList = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pumper/list`
    );

    const players = await pumpersList.json();
    const playersLength = players.length;
    return {
      props: {
        players,
        playersLength,
      },
    };
  } catch (error) {
    return {
      props: {
        players: [],
        playersLength: 0,
      },
    };
    
  }
}
