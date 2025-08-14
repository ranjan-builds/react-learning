import React, { useRef, useLayoutEffect } from "react";
import { LuSparkles } from "react-icons/lu";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { gsap } from "gsap";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-animate='heading']", { opacity: 0, y: 100, duration: 1 })
        .from("[data-animate='paragraph']", { opacity: 0, y: 100, duration: 1 }, "-=0.7")
        .from("[data-animate='arrow']", { opacity: 0, duration: 1 }, "-=0.3")
        .from("[data-animate='sparkle']", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.2
        }, "-=0.8");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full hero flex items-center flex-col justify-center relative py-16"
    >
      <div className="text-center relative max-w-4xl px-4">
        <div className="overflow-hidden">
          <h1
            data-animate="heading"
            className="hero-text text-5xl md:text-7xl lg:text-8xl text-purple-200"
            aria-label="Hi, I'm Ranjan, a developer"
          >
            Hi. I'm Ranjan <br /> A Developer.
          </h1>
        </div>
        <div className="hidden md:block">
          <LuSparkles
            data-animate="sparkle"
            className="absolute -left-40 -top-10 text-8xl font-light text-purple-100"
          />
          <LuSparkles
            data-animate="sparkle"
            className="absolute -right-40 -bottom-10 text-8xl font-light text-purple-100"
          />
        </div>
      </div>

      <div className="text-center max-w-2xl px-4 overflow-hidden">
        <p
          data-animate="paragraph"
          className="text-xs sm:text-sm md:text-base lg:text-lg sm:mt-6 mt-8 text-purple-50"
        >
          Building seamless, interactive web applications with a focus on
          performance
          <br /> and user experience.
        </p>
      </div>

      <div data-animate="arrow">
        <LiaLongArrowAltDownSolid
          className="mt-16 text-6xl text-purple-100/50 animate-bounce"
          aria-label="Scroll down"
        />
      </div>
    </section>
  );
};

export default Hero;
