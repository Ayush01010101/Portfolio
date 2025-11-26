
import ContactSection from "./ContactSection";
import type { ReactNode } from "react";
import SkilsCard from "../CustomUI/SkillsCard";
import BlurText from "../BlurText";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import Experience from "../Experience";
import Tilt3D from "../CustomUI/Tilt3D";

const HomeSection = (): ReactNode => {
  return (
    <>
      <div className="w-full flex flex-col justify-start sm:justify-center min-h-screen pb-5 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />

        <div className="flex flex-col  justify-center sm:w-4xl mx-auto items-center mt-26 sm:mt-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
            {/* Right Image (Now Left) */}
            <div className="flex justify-center perspective-1000">
              <Tilt3D className="rounded-xl">
                <img
                  className="w-full max-w-[350px] sm:w-80 md:w-[380px] lg:w-[460px] rounded-xl drop-shadow-xl"
                  src="https://imgs.search.brave.com/StSyI94kgmcv_rhImuiJB9rz1_aLx9xk9lJYD3Y4_68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjQtMDktMTcv/UnZ1VWdtaTlRaEN4/b3dSQV96cm9yQS53/ZWJw"
                  alt="Coder"
                />
              </Tilt3D>
            </div>

            {/* Left Text (Now Right) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <BlurText
                text="Ayush"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-7xl lg:text-8xl text-white leading-tight font-bold"
              />
              <BlurText
                text="Awachar"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => console.log('hello world')}
                className="text-5xl sm:text-7xl lg:text-8xl text-white leading-tight font-bold "

              />

              <p className="text-gray-400 w-fit mt-4 text-lg sm:text-xl">
                Frontend Developer | React |  Typescript
              </p>
            </div>
          </div>




        </div>
        {/* Skills Card */}

        <div className="sm:w-4xl  mx-3 sm:mx-auto sm:mt-20 mt-10 rounded-xl bg-[#141414] py-4">
          <SkilsCard />
        </div>
      </div>



      {/* about me section */}
      <div>

        <AboutMe />
      </div>
      {/* Experience Section */}
      <div>
        <Experience />
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
    </>
  );
};

export default HomeSection;

