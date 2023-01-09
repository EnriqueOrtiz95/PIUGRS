import Layout from "../components/layout";
import Player from "../components/player";
import { useState, useEffect } from "react";

const Players = ({players}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (players) {
      setIsLoading(false);
    }
  }, [players]);
  return (
    <Layout title={"Players"} description={"List of PIU Players"}>
      <div className="px-16 py-8 bg-gray-form4 my-[5rem]">
        {isLoading ? <h1 className="text-white text-2xl">Loading..</h1> : null}
        <h2 className="heading text-red-fond">Players</h2>

        {players.length && (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-white">
            {players.map((player) => (
              <Player key={player.pumper_id} player={player} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Players;

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/pumper/list`);
  const players = await respuesta.json();
  return {
    props: {
      players,  
    },
  };
}
