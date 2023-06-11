"use client";

import Image from "next/image";
import Button from "./Button";

const Mea = () => {
  const handleScroll = () => {};
  return (
    <section className="mea">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="mea__title">
          Recherche, réserve ou loue une voiture - c&apos;est simple et rapide !
        </h1>
        <p className="mea__subtitle">
          La location de voitures sans efforts, avec toute simplicité.
        </p>
        <Button
          title={"Découvre les voitures"}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="mea__image-container">
        <div className="mea__image">
          <Image src="/mea.png" alt="mea" fill className="object-contain" />
        </div>
        <div className="mea__image-overlay" />
      </div>
    </section>
  );
};

export default Mea;
