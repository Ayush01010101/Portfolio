
import { useEffect } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";

interface SkillsObj {
  imageurl: string;
  text: string;
}

const Skils: SkillsObj[] = [
  { imageurl: "https://images.seeklogo.com/logo-png/27/2/react-logo-png_seeklogo-273845.png", text: "React" },
  { imageurl: "https://cdn.creazilla.com/icons/3254431/tailwindcss-icon-icon-size_512.png", text: "Tailwind" },
  { imageurl: "https://logodix.com/logo/374972.png", text: "JavaScript" },
  { imageurl: "https://cdn.worldvectorlogo.com/logos/typescript.svg", text: "TypeScript" },
  { imageurl: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", text: "Redux" },
  { imageurl: "https://cdn.worldvectorlogo.com/logos/next-js.svg", text: "Next.js" },
  { imageurl: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg", text: "GSAP" },
  { imageurl: "https://cdn-icons-png.flaticon.com/512/25/25231.png", text: "GitHub" },
];

const SkilsCard = (): ReactNode => {


  return (
    <div className="p-6 flex flex-wrap gap-6 bg-[#141414] rounded-xl justify-center">
      {Skils.map((skill, index) => (
        <div
          key={skill.text}
          className="skill-box flex flex-col items-center justify-center gap-2 bg-[#1d1d1d] px-4 py-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
        >
          {/* Image box */}
          <div className="h-12 w-12 flex justify-center items-center">
            <img
              src={skill.imageurl}
              className="object-contain h-full w-full"
            />
          </div>

          {/* Text */}
          <h3 className="text-white font-medium">{skill.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default SkilsCard;

