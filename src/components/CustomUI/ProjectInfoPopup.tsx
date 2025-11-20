import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  X,
  ExternalLink,
  Github,
} from "lucide-react";

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType | null;
}

export default function ProjectInfoPopup({ isOpen, onClose, project }: ModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isOpen && project) {
      const tl = gsap.timeline();

      // Backdrop
      tl.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Modal content
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.1"
      );

      // Close button
      tl.from(
        "#modalCloseBtn",
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
          duration: 0.4,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

      // Image
      tl.from(
        "#modalImage",
        {
          scale: 1.2,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Title
      tl.from(
        "#modalTitle",
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Description
      tl.from(
        "#modalDescription",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Tech badges (with stagger)
      tl.from(
        ".tech-badge",
        {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "back.out(2)",
        },
        "-=0.2"
      );

      // Action buttons
      tl.from(
        "#modalActions > *",
        {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, [isOpen, project]);

  /** ================================
   * 🔥 CLOSE MODAL ANIMATION
   * ================================= */
  const handleClose = () => {
    const tl = gsap.timeline();

    tl.to("#modalActions > *", {
      y: 10,
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in",
    });

    tl.to(
      ".tech-badge",
      {
        scale: 0,
        opacity: 0,
        duration: 0.15,
        stagger: 0.02,
        ease: "back.in(2)",
      },
      "-=0.1"
    );

    tl.to(
      ["#modalDescription", "#modalTitle"],
      {
        y: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      },
      "-=0.1"
    );

    tl.to(
      "#modalCloseBtn",
      {
        scale: 0,
        opacity: 0,
        rotation: 180,
        duration: 0.2,
        ease: "back.in(2)",
      },
      "-=0.2"
    );

    tl.to(
      contentRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.25,
        ease: "power2.in",
      },
      "-=0.15"
    );

    tl.to(
      backdropRef.current,
      {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          onClose();
        },
      },
      "-=0.1"
    );
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur opacity-0"
      />

      <div className="absolute inset-0 overflow-y-auto flex items-center justify-center p-4">
        <div
          ref={contentRef}
          className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full shadow-2xl opacity-0 scale-95"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            id="modalCloseBtn"
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-50 rounded-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="aspect-video bg-zinc-800 overflow-hidden rounded-t-2xl">
            <img
              id="modalImage"
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h2
              id="modalTitle"
              className="text-3xl md:text-4xl font-semibold mb-4"
            >
              {project.title}
            </h2>

            <p
              id="modalDescription"
              className="text-base text-zinc-400 mb-6 leading-relaxed"
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-zinc-400 mb-3">
                Technologies Used
              </h3>

              <div id="modalTech" className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="tech-badge px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div
              id="modalActions"
              className="flex flex-col sm:flex-row gap-3"
            >
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
    </div>
  );
}

