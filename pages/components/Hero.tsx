import * as React from "react";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className="flex justify-between items-center bg-red-300 border-y border-black py-30 lg:py-0 ">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black">Dollop</span> is a place
          to write,read and connect with other business owner
        </h1>
        <h2 className="">
          It easy and free to post your method on any topic and connect with
          millions of owners
        </h2>
      </div>
      <img
        className="hidden md:inline-flex h-32 lg:h-32 px-4"
        src="./d.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
