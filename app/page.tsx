import Image from "next/image";
import { CustomFilter, Mea, SearchBar } from "@/components";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Mea />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Voitures</h1>
          <p>Découvre les votures que tu pourrais aimer</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
