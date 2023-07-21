import React from "react";
import KitchenItem from "../../components/kitchenItem";
import NavBar from "../../components/navbar";
import { Avatar, Popover } from "antd";
import ReviewCard from "../../components/reviewCard";

import {
  SmileOutlined,
  CoffeeOutlined,
  HomeOutlined,
  TeamOutlined,
  SketchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const content = (
  <div>
    <p>特级大厨</p>
    <p>获得人数：1</p>
  </div>
);
const information = (
  <div>
    <p>近十次参加及举办party的照片随机选择6张展示</p>
  </div>
);

const TEST_DATA = {
  img: "https://st3.depositphotos.com/9037414/17486/i/1600/depositphotos_174862196-stock-photo-cool-party-happy-smiling-friends.jpg",
};

const ProfilePage = () => {
  return (
    <div className="sm:p-8">
      <NavBar />
      <div className="mt-10 flex flex-row">
        <div className="w-2/5">
          <div className="rounded-lg h-128 w-72 p-4 border-2 flex flex-col items-center">
            <Avatar size="large" style={{ backgroundColor: "F5DA00" }}>
              AL
            </Avatar>
            <div className="mt-2">Alexander Lynch</div>
            <div className="mt-1">2022年9月28日加入</div>
            <div className="mt-1 flex flex-row items-center">
              <SmileOutlined />
              <div className="ml-2">Level 3</div>
              <div className="ml-1">美食家经验值</div>
              <div className="text-amber-500 ml-1">356/800</div>
            </div>
            <div className="mt-3 flex flex-row items-center">
              <HomeOutlined />
              <div className="ml-1">举办party</div>
              <div className="text-lime-600 ml-1">15</div>
              <div className="ml-1">次</div>
            </div>
            <div className="mt-1 flex flex-row items-center">
              <TeamOutlined />
              <div className="ml-1">招待客人</div>
              <div className="text-lime-600 ml-1">63</div>
              <div className="ml-1">人</div>
            </div>
            <div className="mt-1 flex flex-row items-center">
              <CoffeeOutlined />
              <div className="ml-1">参加party</div>
              <div className="text-lime-600 ml-1">3</div>
              <div className="ml-1">次</div>
            </div>
            <div className="mt-3 flex flex-row">
              <div className="font-bold">成就</div>
              <div className="w-48"></div>
            </div>
            <div className="mt-2 flex flex-row">
              {[...Array(3).keys()].map((item) => (
                <Popover content={content}>
                  <SketchOutlined
                    style={{
                      fontSize: "3rem",
                    }}
                  ></SketchOutlined>
                </Popover>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/5 flex flex-col items-start">
          <div className="font-bold mb-3 text-2xl">关联厨房</div>
          <KitchenItem isSimple />
          <div className="flex flex-row items-center">
            <div className="font-bold mt-5 mr-1 mb-3 text-2xl">派对风采</div>
            <Popover content={information}>
              <ExclamationCircleOutlined></ExclamationCircleOutlined>
            </Popover>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6).keys()].map((item) => (
              <img src={TEST_DATA.img} className="object-cover h-full w-full" />
            ))}
          </div>
          <div className="font-bold mt-5 mb-3 text-2xl">好友评价</div>
          {[...Array(3).keys()].map((item) => (
            <ReviewCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
