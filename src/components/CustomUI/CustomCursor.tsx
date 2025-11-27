import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "expo"
      });
    };

    window.addEventListener('mousemove', moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none -translate-x-1/2 -translate-y-1/2 z-9999"
    />
  );
}
