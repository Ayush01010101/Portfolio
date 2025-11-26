import React, { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: ReactNode;
  company: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Backend Development",
    company: "",
    date: "2023 - Present",
    description:
      "Worked with Node.js and Express.js to build basic backend APIs and server-side logic. Created REST APIs, handled routes, middleware, and request handling. Connected projects with MongoDB or JSON-based data storage. Implemented authentication, simple CRUD operations, and error handling. Tested APIs using Postman and integrated them with frontend projects.",
  },
  {
    title: "Frontend Development",
    company: "",
    date: "2022 - 2023",
    description:
      "Worked with React.js, JavaScript, and modern UI styling. Built multiple projects using Tailwind CSS, UI libraries, and reusable components. Implemented state management using hooks and the Context API, added routing, and integrated APIs. Used GSAP for basic animations. Deployed projects on Vercel and managed version control with Git and GitHub.",
  },
  {
    title: <h3 className="flex sm:block  items-center gap-2"><div className="bg-green-400 h-2 w-2 rounded-full animate-pulse"></div> Degree</h3>,
    company: "Bachelor of Computer Applications",
    date: "2023 - 2026",
    description:
      "Developed multiple academic web projects as part of the BCA curriculum, focusing on frontend development using HTML, CSS, JavaScript, and React. Built responsive user interfaces, implemented form validation, and integrated external APIs ",
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
        <h2 className="text-4xl p-2 md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Learnings
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

                    {exp.company && <div
                      className={`flex items-center gap-2 text-zinc-400 mb-4 text-sm ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>}

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

