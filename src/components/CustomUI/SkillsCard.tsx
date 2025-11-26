import type { ReactNode } from "react";

interface SkillsObj {
  imageurl: string;
  text: string;
}

const Technologies: SkillsObj[] = [
  { imageurl: "/Html.svg", text: "HTML" },
  { imageurl: "/Css.svg", text: "CSS" },
  { imageurl: "/Javascript.svg", text: "Javascript" },
  { imageurl: "/Typescript.svg", text: "Typescript" },
  { imageurl: "/React.svg", text: "React" },
  { imageurl: "/Tailwindcss.svg", text: "Tailwind" },
  { imageurl: "/Supabase.svg", text: "Supabase" },
];

const Tools: SkillsObj[] = [
  { imageurl: "/git.svg", text: "Git" },
  { imageurl: "/Github.svg", text: "Github" },
  { imageurl: "/vscode.svg", text: "VS Code" },
  { imageurl: "/postman.svg", text: "Postman" },
  { imageurl: "/docker.svg", text: "Docker" },
];

const SkilsCard = (): ReactNode => {
  return (
    <div className="flex flex-col gap-6 w-full  mx-auto px-8 md:px-4">
      {/* Technologies Section */}
      <div className="flex flex-col gap-2 md:gap-3">
        <h2 className="text-lg md:text-xl font-bold text-white mb-2 border-l-4 border-blue-500 pl-4">Technologies</h2>
        <div className="flex flex-wrap justify-center sm:justify-normal gap-6 md:gap-6 ">
          {Technologies.map((skill) => (
            <div
              key={skill.text}
              className="skill-box w-16 md:w-24 flex flex-col items-center justify-center gap-2 bg-[#1d1d1d] p-2 md:p-3 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 border border-white/5 hover:border-white/10"
            >
              <div className="h-5 w-5 md:h-8 md:w-8 flex justify-center items-center">
                <img
                  src={skill.imageurl}
                  alt={skill.text}
                  className="object-contain h-full w-full"
                />
              </div>
              <h3 className="text-white text-[10px] md:text-sm font-medium text-center">{skill.text}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="flex flex-col gap-2 md:gap-3">
        <h2 className="text-lg md:text-xl font-bold text-white mb-2 border-l-4 border-green-500 pl-4">Tools</h2>
        <div className="flex flex-wrap justify-center sm:justify-normal  gap-6 md:gap-6 ">
          {Tools.map((skill) => (
            <div
              key={skill.text}
              className="skill-box w-16 md:w-24 flex flex-col items-center justify-center gap-2 bg-[#1d1d1d] p-2 md:p-3 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 border border-white/5 hover:border-white/10"
            >
              <div className="h-5 w-5 md:h-8 md:w-8 flex justify-center items-center">
                <img
                  src={skill.imageurl}
                  alt={skill.text}
                  className="object-contain h-full w-full"
                />
              </div>
              <h3 className="text-white text-[10px] md:text-sm font-medium text-center">{skill.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkilsCard;

