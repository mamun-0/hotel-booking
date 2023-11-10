import React from "react";
import Hero from "../../Hero/Hero";
import SectionHeading from "../../SectionHeading/SectionHeading";
import Section1 from "../../Section1/Section1";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <SectionHeading title="We provide best service to you!" />
        <Section1 />
      </div>
    );
  }
}
export default Home;
