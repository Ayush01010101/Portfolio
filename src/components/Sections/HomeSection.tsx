
import type { ReactNode } from "react";
import SkilsCard from "../CustomUI/SkillsCard";
import BlurText from "../BlurText";
import Menu from "../CustomUI/Menu";
import Projects from "../Projects";

const HomeSection = (): ReactNode => {
  return (
    <>
      <div className="w-full">

        {/* Navbar */}
        <div className="fixed z-100 top-4 left-4">
          <Menu />
        </div>

        <div className="flex flex-col h-screen justify-center items-center">
          <div className=" w-full flex    items-center justify-center gap-10 px-6">

            {/* Left Text */}
            <div className="flex  flex-col items-start text-center sm:text-left">

              <BlurText
                text="Ayush Awachar"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => console.log('hello world')}
                className="text-5xl sm:text-7xl lg:text-8xl text-white leading-tight font-bold"
              />

              <p className="text-gray-400 mt-4 text-lg sm:text-xl max-w-md">
                Frontend Developer | React | Tailwind | GSAP | Typescript
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                className="w-64 sm:w-80 md:w-[380px] lg:w-[460px] rounded-xl drop-shadow-xl"
                src="https://media1.tenor.com/m/VO0p4rzSGQ4AAAAd/demon-slayer-kimetsu-no-yaiba.gif"
                alt="Coder"
              />
            </div>




          </div>
          {/* Skills Card */}

          <div className="w-fit mx-auto mt-20 rounded-xl bg-[#141414] p-4">
            <SkilsCard />
          </div>
        </div>

        {/* Projects Section */}
        <div className="mx-3">
          <Projects />
        </div>

        <div className="h-screen" />
      </div >
    </>
  );
};

export default HomeSection;

