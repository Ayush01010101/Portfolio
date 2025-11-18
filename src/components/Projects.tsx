import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
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
    <div
      ref={wrapperRef}
      className="h-screen  flex items-center overflow-hidden"
    >
      <div ref={cardsRef} className="flex gap-5">
        <h1 className=" flex justify-center items-center w-[300px] text-5xl text-white">
          Projects
        </h1>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
              w-[650px] shadow-[0_0_10px_rgba(255,255,255,0.05)] text-white h-[400px] mr-10 
              bg-[1A1A1A] rounded-xl
              flex items-center justify-center
              text-4xl font-semibold
            "
          >
            Card {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

