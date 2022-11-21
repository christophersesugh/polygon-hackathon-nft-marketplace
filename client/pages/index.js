import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Features from "../components/features";
import Onboarding from "../components/onboarding";
import Team from "../components/team";
import Testimonials from "../components/testimonial";
import FAQS from "../components/faqs";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Onboarding />
      <Team />
      <FAQS />
    </>
  );
}
