import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Title from "./components/Title/Title";
import FrameHeader from "./components/FrameHeader/FrameHeader";
import Info from "./components/Info/Info";
import Streamlined from "./components/Streamlined/Streamlined";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <Slider />
        <Title title="Boost your productivity" />
        <FrameHeader
          title="A more effective way to track progress"
          subTitle="Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer."
        />
        <Info />
        <Title title="Everything you need" />
        <FrameHeader
          title="Streamlined for easy management"
          subTitle="Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
        />
        <Streamlined />
        <FrameHeader
          title="Pricing"
          subTitle="Free forever. Upgrade for unlimited tasks, better security, and exclusive features."
        />
        <Pricing />
        <Title title="Testimonials" />
        <FrameHeader
          title="What our users say"/>
          <FrameHeader
          title="Sign up for free today"
          subTitle="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
        />
      </div>
    </div>
  );
};

export default App;
