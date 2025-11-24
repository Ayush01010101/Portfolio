import React, { useLayoutEffect, useRef, useState } from "react";
import type { ProjectType } from "./CustomUI/ProjectInfoPopup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Info, MoveUpRight } from "lucide-react";
import ProjectInfoPopup from "./CustomUI/ProjectInfoPopup";

interface ProjectsCard extends ProjectType {
  redirectURL: string;
  imagepath: string;
}

const ProjectsCardArr: ProjectsCard[] = [
  {
    title: "Mayamorph AI",
    description: "Mayamorph AI represents the next evolution in creative tools, leveraging state-of-the-art deep learning algorithms to convert simple text descriptions into breathtaking visual art. By integrating powerful diffusion models with a user-friendly React frontend, the platform democratizes art creation, allowing anyone to generate professional-grade illustrations, photorealistic scenes, and conceptual designs without prior artistic training. Users can fine-tune their results through advanced parameter controls, explore a vast library of community-generated styles, and seamlessly export high-definition images. This project showcases the potential of AI to augment human creativity, providing a robust solution for rapid prototyping, digital content creation, and artistic exploration in the modern web ecosystem.",
    image: "/thumbnail.png",
    imagepath: "/thumbnail.png",
    tech: ["React", "Tailwind CSS", "Node.js", "OpenAI API"],
    link: "https://mayamorph.netlify.app",
    redirectURL: "https://mayamorph.netlify.app",
  },
  {
    title: "Social Media App",
    description: "Experience the future of digital connection with this comprehensive Social Media Application, engineered for speed, security, and scalability. Built on a modern tech stack featuring Next.js, Prisma, and PostgreSQL, the app delivers a fluid, app-like experience directly in the browser. It features a sophisticated real-time notification system, instant messaging capabilities, and an intelligent feed algorithm that curates content based on user engagement. The clean, intuitive UI ensures effortless navigation, while robust backend architecture guarantees data integrity and fast load times. From creating rich media posts to managing detailed user profiles, every aspect is designed to foster meaningful interactions and build vibrant online communities.",
    image: "/socialmedia_thumbnail.png",
    imagepath: "/socialmedia_thumbnail.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "https://social-media-taupe-alpha.vercel.app/",
    redirectURL: "https://social-media-taupe-alpha.vercel.app/",
  },

];

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isProjectInfoOpen, setisProjectInfoOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !cardsRef.current) return;

    const cards = cardsRef.current;
    const cardCount = cards.children.length;
    const cardWidth = 690; // 650px width + 40px margin (mr-10)

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        x: -(cardWidth * (cardCount - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current!,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + (cardWidth * (cardCount - 1))
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const handleOpenPopup = (project: ProjectType) => {
    setCurrentProject(project);
    setisProjectInfoOpen(true);
  };

  return (
    <>
      <ProjectInfoPopup
        isOpen={isProjectInfoOpen}
        onClose={() => setisProjectInfoOpen(false)}
        project={currentProject}
      />
      <div
        ref={wrapperRef}
        className="h-screen flex items-center overflow-hidden"
      >
        <div ref={cardsRef} className="flex gap-5">
          <h1 className=" flex justify-center items-center w-[300px] text-5xl text-white">
            Projects
          </h1>
          {ProjectsCardArr.map((projectinfo, i) => (
            <div
              key={i}
              className="
              w-[650px] shadow-[0_0_10px_rgba(255,255,255,0.05)] text-white h-[400px] mr-10 
              bg-[1A1A1A] rounded-xl 
              flex items-center justify-center
              text-4xl font-semibold
            "
            >
              <div className="w-full h-full relative">
                <img src={projectinfo.imagepath} className="h-full w-full object-cover rounded-xl" />
                <MoveUpRight onClick={() => window.open(projectinfo.redirectURL, "_blank")} className="absolute bottom-5 right-7 cursor-pointer " color="white" size={30} />
                <Info onClick={() => handleOpenPopup(projectinfo)} className="absolute bottom-5 right-20 cursor-pointer" color="white" size={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
