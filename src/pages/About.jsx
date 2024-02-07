import React from "react";
import "../styles/About.css";
import Layout from "../components/Layout/Layout";
import AboutUs from "../components/AboutComponents/AboutUs";
import AboutBanner from "../components/AboutComponents/AboutBanner";
import Testimonial from "../components/Testimonial";
import founder1 from "../assets/images/FounderImage/founder-1.jpg";
import founder2 from "../assets/images/FounderImage/founder-2.png";
import founder3 from "../assets/images/FounderImage/founder-3.jpg";
import ContactFromHome from "../components/ContactFromHome";
import Founders from "../components/AboutComponents/Founders";

const About = () => {
  const FoundersData = [
    {
      card: {
        title: "Bhagvendra Singh",
        subTitle: "Founder & CEO",
        content:
          "I made bacck the purchase price in just 48 hours! Thank youfor making it pain less, pleasant. The service was I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know.execellent. I will refer everyone I know.",
        image: founder1,
      },
    },
    {
      card: {
        title: "Upendra Rao",
        subTitle: "Founder, Developer",
        content:
          "I made bacck the purchase price in just 48 hours! Thank youfor making it pain less, pleasant. The service was I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know.execellent. I will refer everyone I know.",
        image: founder2,
      },
    },
    {
      card: {
        title: "Ashish Tripathi",
        subTitle: "Founder",
        content:
          "I made bacck the purchase price in just 48 hours! Thank youfor making it pain less, pleasant. The service was I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know.execellent. I will refer everyone I know.",
        image: founder3,
      },
    },
  ];
  return (
    <Layout>
      {/* //! About Banner  */}
      <AboutBanner />

      {/* //! About Us Section  */}
      <AboutUs />

      {/* //! Founders Section  */}
      <Founders />
      {/* <Testimonial title={"Hii"} caption={"dag"} Data={FoundersData}/> */}

      {/* //! Social Media Links */}
      <ContactFromHome
        heading={"Want your business grow online?"}
        mainContent={"We Provide Innovative Website Development Solutions."}
        subContent={"Want to build your online portfolio? Contact us on :"}
      />
    </Layout>
  );
};

export default About;
