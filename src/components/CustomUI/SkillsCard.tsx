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
  { imageurl: "/Next.svg", text: "Next.js" },
  { imageurl: "/Tailwind.svg", text: "Tailwind" },
  { imageurl: "/Node.svg", text: "Node.js" },
  { imageurl: "/Supabase.svg", text: "Supabase" },
];

const Tools: SkillsObj[] = [
  { imageurl: "/Git.svg", text: "Git" },
  { imageurl: "/Github.svg", text: "Github" },
  { imageurl: "/Vscode.svg", text: "VS Code" },
  { imageurl: "/Postman.svg", text: "Postman" },
  { imageurl: "/Figma.svg", text: "Figma" },
  { imageurl: "/Docker.svg", text: "Docker" },
];

const SkilsCard = (): ReactNode => {
  return (
    <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto px-4">
      {/* Technologies Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">Technologies</h2>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {Technologies.map((skill) => (
            <div
              key={skill.text}
              className="skill-box w-28 flex flex-col items-center justify-center gap-2 bg-[#1d1d1d] px-4 py-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 border border-white/5 hover:border-white/10"
            >
              <div className="h-10 w-10 flex justify-center items-center">
                <img
                  src={skill.imageurl}
                  alt={skill.text}
                  className="object-contain h-full w-full"
                />
              </div>
              <h3 className="text-white text-sm font-medium text-center">{skill.text}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-white mb-4 border-l-4 border-green-500 pl-4">Tools</h2>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {Tools.map((skill) => (
            <div
              key={skill.text}
              className="skill-box w-28 flex flex-col items-center justify-center gap-2 bg-[#1d1d1d] px-4 py-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 border border-white/5 hover:border-white/10"
            >
              <div className="h-10 w-10 flex justify-center items-center">
                <img
                  src={skill.imageurl}
                  alt={skill.text}
                  className="object-contain h-full w-full"
                />
              </div>
              <h3 className="text-white text-sm font-medium text-center">{skill.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkilsCard;

