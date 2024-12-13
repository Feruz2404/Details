import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const navigateToDiscovery = () => {
    navigate("/discovery");
  };

  return (
    <div className="container max-xl:bg-center bg-hero-pattern w-[1600px] h-[700px] bg-no-repeat bg-contain flex justify-center items-center ">
      <div className="container flex justify-center items-center">
        <div className="w-[70%] bg-[#F7F8FACC] backdrop-blur-xl rounded border text-center px-10 py-8 font-poppins flex flex-col items-center">
          <div className="w-[80%]">
            <p className="text-[40px]">🌱</p>
            <p className="text-[40px]">The nature candle</p>
            <p>
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
          </div>
          <button
            onClick={navigateToDiscovery}
            className="px-12 py-2 my-10 bg-[#56B280] text-white rounded-s hover:bg-[#f7ad68] duration-300"
          >
            Discovery our collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
