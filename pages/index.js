import Score from "../public/img/piu.png";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title={"Home"} description={"PIUGRS - Home"}>
      <main className={`my-20`}>
        <section className="heading text-gray-BA my-10">
          <h2>Pump It Up - Global Ranking Scores (PIU-GRS)</h2>
          <p className="text-4xl mt-4 text-orange-button">
            The Pump It Up Database of the best Scores among players in the
            World!
          </p>
        </section>
        <section className="bg-gray-form2 text-white w-full p my-24">
          <h2 className="heading">How does PIU-GRS Works?</h2>

          <div className=" px-[3%] flex flex-col lg:flex-row items-center py-10 gap-8">
            <div className="w-2/3">
              <p className="py-8">
                PIU-GRS is an independient project that aims to collect the best
                scores of Pump It Up players around the world. The scores are
                collected from the Scores that are uploaded by every player.
                <br /> <br />
                This in order to create a database of the best scores of every
                song and every difficulty in the game.
              </p>
            </div>
            <div className="w-[85%] md:w-[75%] lg:w-1/3">
              <Image src={Score} alt="Score Example" />
            </div>
          </div>
        </section>

        <section className="bg-gray-form3 text-white w-full p my-24">
          <h2 className="heading">How do i upload a score?</h2>

          <div className=" px-[3%] flex flex-col lg:flex-row items-center py-10 gap-8">
            <div className="w-[85%] md:w-[75%] lg:w-1/3">
              <Image src={Score} alt="Score Example" />
            </div>
            <div className="lg:w-2/3">
              <p className="py-8">
                Scores are uploaded by the players themselves. To upload a
                score, you must have a PIU-GRS account. If you dont have one,
                you can create one by clicking the{" "}
                <span className="text-clear-blue">Register</span> button in the
                top right or right{" "}
                <Link legacyBehavior href="/register">
                  <a className="text-orange-button hover:text-orange-500">
                    here
                  </a>
                </Link>
                <br /> <br />
                This in order to create a database of the best scores of every
                song and every difficulty in the game.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
