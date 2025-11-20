import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Github,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navContainer = useRef<HTMLDivElement | null>(null);
  const navbar = useRef<HTMLDivElement | null>(null);
  const logo = useRef<HTMLAnchorElement | null>(null);
  const githubLink = useRef<HTMLAnchorElement | null>(null);
  const ctaButton = useRef<HTMLButtonElement | null>(null);
  const mobileMenuBtn = useRef<HTMLButtonElement | null>(null);
  const mobileMenu = useRef<HTMLDivElement | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {


    let lastScroll = 0;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const y = self.scroll();

        if (y > 100) {
          if (y > lastScroll) {
            gsap.to(navbar.current, {
              y: -100,
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            gsap.to(navbar.current, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        }

        lastScroll = y;
      },
    });
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);

    if (!mobileOpen) {
      gsap.to(mobileMenu.current, {
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.from(".mobile-link", {
        x: -10,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenu.current, {
        height: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <nav
      ref={navbar}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
    >
      <div className="max-w-4xl mx-auto">
        <div
          ref={navContainer}
          className="glass-nav bg-[#141414] border border-zinc-800/50 rounded-2xl px-6 md:px-8 py-4 shadow-2xl "
        >
          <div className="flex items-center justify-between">
            <span
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 bg-zinc-50 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-zinc-950" />
              </div>
              <span className="text-base font-semibold text-zinc-50 hidden sm:block">
                Portfolio
              </span>
            </span>

            <div className="hidden md:flex  items-center space-x-1">
              {["Projects", "About", "Contact"].map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  className="nav-link px-4 py-2 text-sm text-zinc-400 hover:text-zinc-50 
                             rounded-lg hover:bg-zinc-800/50 transition-all"
                >
                  {text}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              <a
                target="_blank"

                href="https://github.com/Ayush01010101"
                className="hidden sm:flex items-center space-x-2 px-4 py-2 text-sm 
                           text-zinc-400 hover:text-zinc-50 rounded-lg hover:bg-zinc-800/50 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                ref={ctaButton}
                className="flex items-center space-x-2 bg-zinc-50 hover:bg-zinc-200 
                           text-zinc-950 font-medium text-sm px-4 py-2 rounded-lg transition-all"
              >
                <span className="hidden sm:inline">Hire Me</span>
                <span className="sm:hidden">Hire</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile toggle */}
              <button
                ref={mobileMenuBtn}
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 
                           rounded-lg hover:bg-zinc-800/50 transition-all"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            ref={mobileMenu}
            className="md:hidden overflow-hidden h-0"
          >
            <div className="pt-4 pb-2 space-y-2 border-t border-zinc-800/50 mt-4">
              {["Projects", "About", "Contact"].map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  className="mobile-link block px-4 py-2 text-sm text-zinc-400 
                             hover:text-zinc-50 rounded-lg hover:bg-zinc-800/50 transition-all"
                >
                  {text}
                </a>
              ))}

              <a
                target="_blank"
                href="https://github.com/Ayush01010101"
                className="mobile-link flex items-center space-x-2 px-4 py-2 text-sm 
                           text-zinc-400 hover:text-zinc-50 rounded-lg hover:bg-zinc-800/50 transition-all sm:hidden"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

