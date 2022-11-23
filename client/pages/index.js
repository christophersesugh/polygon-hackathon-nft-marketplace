import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Features from "../components/features";
import Onboarding from "../components/onboarding";
import Team from "../components/team";
import FAQS from "../components/faqs";
import About from "../components/about";
import AppHead from "../components/app-head";

export default function Home() {
  return (
    <>
      <AppHead title="NFTCore" />
      <Header />
      <About />
      <Features />
      <Onboarding />
      <Team />
      <FAQS />
    </>
  );
}
