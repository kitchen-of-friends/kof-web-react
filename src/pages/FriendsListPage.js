import React from "react";
import Card from "../components/card";
import NavBar from "../components/navbar";

const TEST_DATA = {
  name: "野生大骚风的料理坊",
  desc: "本店是元宇宙料理社交第一店！由一位重庆厨狮提供料理友谊服务，欢迎各位看官来品尝呀！",
  img: "https://kitchen-of-friends.s3.amazonaws.com/kitchen_one.jpg",
};

const FriendsListPage = () => {
  return (
    <div className="p-8">
      <NavBar />
      <div className="mt-8 p-8">
        <h1 className="text-xl pb-4">可选列表</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-6">
          <Card
            name={TEST_DATA.name}
            desc={TEST_DATA.desc}
            img={TEST_DATA.img}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendsListPage;
