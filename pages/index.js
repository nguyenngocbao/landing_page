import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Home = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => setTheme('light'),[]);
  return (
    <>
      <Head>
        <title>Taplink</title>
        <meta
          name="description"
          content="Taplink - NFC Technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Watch a video"
        title="Watch to see what we'll be doing.">
        TapLink is bringing exciting new NFC capabilities to make life seamless. Watch to see what we'll be doing with this game-changing technology.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Taplink's Benefits"
        title="Discover the Benefits of Taplink.">
        Dive into a Comprehensive Exploration of the Advantages Offered by Taplink.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;