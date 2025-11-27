import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { X, ExternalLink, Github } from "lucide-react";

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType | null;
}

export default function ProjectInfoPopup({ isOpen, onClose, project }: ModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);




  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);



  useEffect(() => {
    if (isOpen && project) {
      gsap.set(backdropRef.current, { opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(closeBtnRef.current, { opacity: 0, scale: 0, rotation: -180 });
      gsap.set(imgRef.current, { opacity: 0, scale: 1.2 });
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(descRef.current, { opacity: 0, y: 20 });
      gsap.set(".tech-badge", { opacity: 0, scale: 0 });
      if (actionsRef.current) gsap.set(actionsRef.current.children, { opacity: 0, y: 20 });

      const tl = gsap.timeline();

      tl.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      tl.to(
        contentRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)",
        },
        "-=0.1"
      );

      tl.to(
        closeBtnRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

      tl.to(
        imgRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        ".tech-badge",
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "back.out(2)",
        },
        "-=0.2"
      );

      if (actionsRef.current) {
        tl.to(
          actionsRef.current.children,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }
    }
  }, [isOpen, project]);

  const handleClose = () => {
    gsap.timeline();
    onClose()
  };

  if (!isOpen || !project) return null;

  return (
    createPortal(<div className="fixed inset-0 z-100">

      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur"
      />

      <div className="absolute inset-0 overflow-y-hidden py-16 flex items-center justify-center p-4">
        <div
          ref={contentRef}
          className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Btn */}
          <button
            ref={closeBtnRef}
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-50 rounded-lg transition-all"
          >
            <X className="w-5 cursor-pointer h-5" />
          </button>

          {/* Image */}
          <div className="aspect-video bg-zinc-800 overflow-hidden rounded-t-2xl">
            <img
              ref={imgRef}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 ref={titleRef} className="text-3xl text-white md:text-4xl font-semibold mb-4">
              {project.title}
            </h2>

            <p ref={descRef} className="text-base sm:max-h-40  max-h-56 overflow-y-auto text-zinc-400 mb-6  leading-relaxed show-scroll">
              {project.description}
            </p>

            {/* Tech */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-zinc-400 mb-3">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="tech-badge px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium rounded-lg"
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div ref={actionsRef} className="flex flex-col sm:flex-row gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-900 px-6 py-3 rounded-lg transition-all"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <button className="flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-50 px-6 py-3 rounded-lg transition-all">
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>, document.querySelector("#popup") as HTMLDivElement)
  )
}

