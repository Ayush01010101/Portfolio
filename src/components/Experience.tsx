
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "TechCorp Solutions",
    date: "2023 - Present",
    description:
      "Leading the frontend development of core products using React, TypeScript, and Tailwind CSS. Improved site performance by 40% through code splitting and optimization techniques.",
  },
  {
    title: "Web Developer Intern",
    company: "Digital Innovations",
    date: "2022 - 2023",
    description:
      "Collaborated with senior developers to build responsive web interfaces. Implemented modern UI/UX designs and ensured cross-browser compatibility.",
  },
  {
    title: "Freelance Developer",
    company: "Self Employed",
    date: "2021 - 2022",
    description:
      "Delivered custom website solutions for various clients. specialized in creating landing pages and e-commerce storefronts using modern web technologies.",
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      const items = gsap.utils.toArray(".experience-item");
      items.forEach((item: any, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="experience"
      ref={containerRef}
      className="w-full min-h-screen py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Experience
        </h2>

        <div className="relative">
          {/* Central Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-700 via-zinc-500 to-zinc-800 transform -translate-x-1/2 md:translate-x-0"
          />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0">
                  <div
                    className={`bg-[#1A1A1A] p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors relative ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                  >
                    {/* Connector Line */}
                    <div
                      className={`
                       hidden sm:block absolute top-8 h-0.5 bg-zinc-700 w-8 md:w-4
                        
                        ${index % 2 === 0
                          ? "sm:-left-4"
                          : "sm:-right-4"
                        }
                      `}
                    />

                    {/* connector line for mobile */}
                    <div
                      className={`
                       sm:hidden absolute top-8 h-0.5 bg-zinc-700 w-8 md:w-4
                       -left-8
                      `}
                    />


                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>

                    <div
                      className={`flex items-center gap-2 text-zinc-400 mb-4 text-sm ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>

                    <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Empty space */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

