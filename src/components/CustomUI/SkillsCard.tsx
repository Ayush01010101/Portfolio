import type { ReactNode } from "react";
interface SkillsObj {
  imageurl: string;
  text: string;
}

const Skils: SkillsObj[] = [
  { imageurl: "https://images.seeklogo.com/logo-png/27/2/react-logo-png_seeklogo-273845.png", text: "React" },
  { imageurl: "https://cdn.creazilla.com/icons/3254431/tailwindcss-icon-icon-size_512.png", text: "Tailwind" },

  { imageurl: "https://logodix.com/logo/374972.png", text: "JS" }
];

const SkilsCard = (): ReactNode => {
  return (
    <div className="p-4 flex gap-4 bg-[#141414] rounded-xl">
      {Skils.map((skill) => (
        <div
          key={skill.text}
          className="flex flex-col items-center justify-center gap-2"
        >
          {/* Image box */}
          <div className="h-12 w-12 flex justify-center items-center">
            <img
              src={skill.imageurl}
              className="object-contain h-full w-full"
            />
          </div>

          {/* Text */}
          <h3 className="text-white">{skill.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default SkilsCard;

