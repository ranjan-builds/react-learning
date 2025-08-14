import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const Blogs = () => {
const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(textRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          delay: 0.1 // Added slight delay for better timing
        });
      }
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);
  
  return (
    <div className="w-full h-60 flex items-center flex-col justify-center relative">
      <div  className="text-center relative overflow-hidden ">
        <h1 ref={textRef} className=" hero-text text-5xl md:text-7xl lg:text-8xl text-purple-200 ">
          Blogs
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
