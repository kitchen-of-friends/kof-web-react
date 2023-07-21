import React from "react";
import bgImg from "../assets/1.svg";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row  bg-white">
      <div className="bg-white pb-8 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32">
        <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-yellow-400">朋友家的厨房</span>
            </h1>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              <span className="">意义社交，深度链接，个性生活</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              注册KOF账号，寻找你朋友的"厨房"！加入他们举办的各色聚会！和朋友们一起吃美味的料理、一起玩桌游、一起看电影、一起读书……还有更多意想不到的有趣的活动等待你的挖掘！
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/party/list"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-white hover:bg-yellow-500 md:py-4 md:px-10 md:text-lg"
                >
                  寻找精彩聚会
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex flex-col justify-center lg:w-1/2">
        <img
          className="object-cover content-center  mt-5 w-full h-auto"
          src={bgImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutPage;
