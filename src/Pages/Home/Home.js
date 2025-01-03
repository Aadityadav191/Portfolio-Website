import React from "react";
import "./Home.css";
import ShapeDivider from "../../Components/ShapeDivider/ShapeDivider";
import Socialicon from "../../Components/Socialicon/Socialicon";
import DownloadBtn from "../../Components/Buttons/DownloadBtn/DownloadBtn";
import HeroImage from "../../Assets/HeroImage.png";

export default function Home() {
  return (
    <>
      <main className="landing">
        <section className="content">
          <text className="text1">
            <h4> Hi There , </h4>
            <span> I'm Aadit Yadav </span>
            <h3>A software Engineer. </h3>
          </text>

          <DownloadBtn />
          <Socialicon />
        </section>

        <section className="imagesection">
          <img src={HeroImage} className="image" alt="Girl in a jacket" />
        </section>

        <section>
          <ShapeDivider />
        </section>
      </main>
    </>
  );
}
