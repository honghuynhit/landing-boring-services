import React from "react";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import BenefitsSection from "../components/BenefitsSection";
import CommunitySection from "../components/CommunitySection";
import CTASection from "../components/CTASection";
import Head from "next/head";
import ReactGA from "react-ga";

export default function Home() {
  ReactGA.pageview("home");

  return (
    <>
      <Head>
        <title>Polywrap - Simplifying Complexity</title>
      </Head>
      <main>
        <Hero />
        <ProblemSection />
        <BenefitsSection />
        <CommunitySection />
      </main>
    </>
  );
}
