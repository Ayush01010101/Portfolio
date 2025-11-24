
import ContactSection from "./ContactSection";
import type { ReactNode } from "react";
import SkilsCard from "../CustomUI/SkillsCard";
import BlurText from "../BlurText";
import Projects from "../Projects";
import AboutMe from "../AboutMe";

const HomeSection = (): ReactNode => {
  return (
    <>
      <div className="w-full">

        <div className="flex flex-col mt-15 min-h-screen justify-center items-center">
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6">

            {/* Left Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <BlurText
                text="Ayush Awachar"

                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => console.log('hello world')}
                className="text-5xl sm:text-7xl lg:text-8xl text-white leading-tight font-bold"
              />

              <p className="text-gray-400 mt-4 text-lg sm:text-xl max-w-md">
                Frontend Developer |  React | Javascript | Typescript
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-[350px] sm:w-80 md:w-[380px] lg:w-[460px] rounded-xl drop-shadow-xl"
                src="https://media1.tenor.com/m/VO0p4rzSGQ4AAAAd/demon-slayer-kimetsu-no-yaiba.gif"
                alt="Coder"
              />
            </div>




          </div>
          {/* Skills Card */}

          <div className="w-fit mx-3 sm:mx-auto mt-20 rounded-xl bg-[#141414] py-4">
            <SkilsCard />
          </div>
        </div>



        {/* about me section */}
        <div>

          <AboutMe />
        </div>
        {/* Projects Section */}
        <div className="mx-3">
          <Projects />
        </div>
        <div >

          <div >
            <ContactSection />
          </div>
        </div>
      </div >
    </>
  );
};

export default HomeSection;

