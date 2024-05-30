import React from "react";
import bg from "../../assets/img/bome-bg.png";
import watch from "../../assets/img/watch.png";

const Home = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          background: `url("${bg}") no-repeat center / cover`,
          minHeight: "80vh",
          borderRadius: "50px",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-white ml-[50px] flex items-start justify-center flex-col gap-5">
            <h1 className="text-[35px] font-medium">Sale up to 20% off</h1>
            <h1 className="text-[50px] font-black">Apple Watch Ultra 2</h1>
            <p className="text-[20px]">
              The most rugged and capable Apple Watch pushes <br /> the limits
              again. Featuring the all-new S9 SiP.
            </p>
            <div className="flex items-center gap-[15px]">
              <button className="py-[5px] px-[25px] text-[20px] bg-orange-600 rounded-[20px]">
                Shop Now
              </button>
              <button className="py-[5px] px-[25px] text-[20px] bg-white text-black rounded-[20px]">
                Learn More
              </button>
            </div>
          </div>
          <img src={watch} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
