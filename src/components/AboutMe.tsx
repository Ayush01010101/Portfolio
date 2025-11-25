import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          textRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".stat-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="w-full min-h-[60vh] flex flex-col justify-center items-center py-20 px-6  text-white"
    >
      <div className="max-w-4xl w-full">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
        >
          About Me
        </h2>

        <p
          ref={textRef}
          className="text-lg md:text-3xl text-gray-400 leading-relaxed text-center mb-12 max-w-3xl mx-auto"
        >
          I'm an aspiring Frontend Developer passionate about building clean, responsive, and user-friendly web interfaces.
          I have a strong understanding of React, TypeScript, and modern CSS frameworks, and I love turning ideas into functional and visually appealing components.
          As a fresher, I'm constantly learning, experimenting, and improving my craft to stay aligned with modern web development trends.
          When I’m not coding, you’ll find me exploring UI/UX ideas, learning new tools, or gaming.
        </p>

        <div ref={statsRef} className="grid content-center  grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="stat-item flex flex-col items-center p-4 bg-[#1A1A1A] rounded-xl border border-white/5 hover:border-white/10 transition-colors">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">1+</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
          </div>
          <div className="stat-item flex flex-col items-center p-4 bg-[#1A1A1A] rounded-xl border border-white/5 hover:border-white/10 transition-colors">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">15+</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
          </div>
          <div className="stat-item flex flex-col items-center p-4 bg-[#1A1A1A] rounded-xl border border-white/5 hover:border-white/10 transition-colors">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">100%</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Commitment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
