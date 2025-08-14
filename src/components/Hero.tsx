import { LuSparkles } from "react-icons/lu";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <div className="w-full hero flex items-center flex-col justify-center relative">
      <div className="text-center relative ">
        <h1 className=" hero-text text-5xl md:text-7xl lg:text-8xl text-slate-950/80 ">
          Hi. I'm Ranjan <br /> A Developer.
        </h1>
        <div className="hidden md:block">
          <LuSparkles className="absolute -left-40 -top-10 text-8xl font-light text-slate-950/80" />
          <LuSparkles className="absolute -right-40 -bottom-10 text-8xl font-light text-slate-950/80" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg  sm:mt-6 mt-8">
          Building seamless, interactive web applications with a focus on
          performance
          <br /> and user experience.
        </p>
      </div>
      <LiaLongArrowAltDownSolid className=" mt-16 text-6xl text-slate-950/80 animate-bounce" />
    </div>
  );
};

export default Hero;
