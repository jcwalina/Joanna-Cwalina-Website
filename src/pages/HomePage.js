import React from "react";
import { Header } from "../components/Header";
import Services from "../components/Services";
import EnergySession from "../components/EnergySession";
import HealingSession from "../components/HealingSession";
import AboutMe from "../components/AboutMe";
import Quote from "../components/Quote";
import MoreServices from "../components/MoreServices";
import Feedback from "../components/Feedback";
import Calendly from "../components/Calendly";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Services />
      <EnergySession />
      <HealingSession />
      <AboutMe />
      <Quote />
      <MoreServices />
      <Calendly />
      <Feedback />
    </div>
  );
}
