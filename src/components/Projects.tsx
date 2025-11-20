import React, { useLayoutEffect, useRef, useState } from "react";
import type { ModalProps as ProjectInfoType } from "./CustomUI/ProjectInfoPopup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Info, MoveUpRight } from "lucide-react";
import ProjectInfoPopup from "./CustomUI/ProjectInfoPopup";

interface ProjectsCard {
  redirectURL: string,
  imagepath: string,

}

const ProjectsCardArr: ProjectsCard[] = [
  { redirectURL: "https://mayamorph.netlify.app", imagepath: "/thumbnail.png" },
  { redirectURL: "https://social-media-taupe-alpha.vercel.app/", imagepath: "/socialmedia_thumbnail.png" }

]

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isProjectInfoOpen, setisProjectInfoOpen] = useState<boolean>(false)
  const [ProjectInfo, setProjectInfo] = useState('')
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !cardsRef.current) return;

    const cards = cardsRef.current;
    const cardCount = cards.children.length;
    const cardWidth = 340; // width + marginRight

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
  return (
    <>

      <ProjectInfoPopup
        isOpen={isProjectInfoOpen}
        onClose={() => setisProjectInfoOpen(false)}
        project={{
          description: "AI image generation is based on deep learning models trained on massive datasets of images and text. These models learn visual patterns, styles, objects, and relationships, allowing them to interpret human-written prompts and translate them into coherent, detailed images. By converting text into numerical representations, the model predicts pixel structures or latent visual features, gradually shaping a final output that reflects the prompt’s meaning. Modern diffusion models refine noisy data step-by-step, improving clarity and realism. This technology enables creative experimentation, rapid visual prototyping, and unique artwork generation, bridging language understanding with advanced computer vision.",
          image: "/thumbnail.png",
          tech: ["react js", "tailwind css"],
          title: "mayamorph ai image generation",
          link: "https://mayamorph.netlify.app"
        }}
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

                <Info onClick={() => setisProjectInfoOpen(true)} className="absolute bottom-5 right-20 cursor-pointer" color="white" size={30} />
              </div>
            </div>
          ))}
        </div>

      </div >

    </>
  );
};

export default Projects;

