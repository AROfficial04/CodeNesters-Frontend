import React from "react";
import Layout from "../components/Layout/Layout";
import Testimonial from "../components/Testimonial";
import HeroSectionHome from "../components/HeroSectionHome";
import WhyUsSectionHome from "../components/WhyUsSectionHome";
import TestimonialCarousel from "../components/TestimonialCarousel";
import BusinessProblemHome from "../components/BusinessProblemHome";
import ContactFromHome from "../components/ContactFromHome";

const Home = () => {
  return (
    <Layout>
      {/* //! Hero Section  */}
      <HeroSectionHome />

      {/* //!Why CodeNesters */}
      <WhyUsSectionHome />

      {/* //! Business Problems Section  */}
      <BusinessProblemHome />

      {/* //! Testimonial  */}
      <Testimonial />

      {/* //! Immediate contact from home  */}
      <ContactFromHome/>

      {/* <Carousel /> */}
      {/* <TestimonialCarousel/> */}
    </Layout>
  );
};

export default Home;
