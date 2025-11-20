import React, { useLayoutEffect, useRef, useState } from "react";
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
  const [isProjectInfoOpen, setisProjectInfoOpen] = useState<boolean>(true)
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
      {ProjectInfoPopup && <ProjectInfoPopup isOpen={true} project={{ title: "hello", description: "this is my name and my name is so good what is do now", tech: ['react js ', 'tailwind css'], image: '/thumbnail.png', link: 'https://mayamorph.netlify.app' }} onClose={() => { }} />}
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

