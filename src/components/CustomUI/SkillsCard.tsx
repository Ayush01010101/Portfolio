import { useEffect } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";

interface SkillsObj {
  imageurl: string;
  text: string;
}

const Skils: SkillsObj[] = [
  {
    imageurl: "/Html.svg", text: "HTML"
  },
  { imageurl: "/Css.svg", text: "CSS" },
  { imageurl: "/Javascript.svg", text: "Javascript" },
  { imageurl: "Typescript.svg", text: "Typescript" },
  { imageurl: "/Supabase.svg", text: "Supabase" },
  { imageurl: "Github.svg", text: "Github" },
];



const SkilsCard = (): ReactNode => {

  return (
    <div className="p-6 flex flex-wrap gap-6 bg-[#141414] rounded-xl justify-center">
      {Skils.map((skill, index) => (
        <div
          key={skill.text}
          className="skill-box w-36 flex flex-col items-center justify-center gap-2 bg-[#1d1d1d] px-4 py-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
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

