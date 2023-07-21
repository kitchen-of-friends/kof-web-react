import React from "react";
import PartyCard from "../components/partyCard";
import mainpageBanner from "../assets/mainpage-banner.png";

const MainPage = () => {
  const partyData = [
    {
      ID: 1,
      name: "科幻电影之夜",
      state: "报名中",
      startTime: "8月2日20点",
      city: "北京市",
      location: "海淀区",
      address: "北京市海淀区中关村大街5号",
      fee: "19.9元",
      discount: "会员-10%",
      img: "https://gaoimg.com/wp-content/uploads/2023/06/1682037257-76dd07e1e38de67.jpg",
      kitchenName: "电影小屋",
      isMemberOnly: false,
    },
    {
      ID: 2,
      name: "职场主题圆桌派",
      state: "报名中",
      startTime: "8月10日15点",
      city: "上海市",
      location: "静安区",
      address: "上海市静安区南京西路1788号",
      fee: "39.9元",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/04/6304a922e2944bc1-1.jpg",
      kitchenName: "职场我知道",
      isMemberOnly: true,
    },
    {
      ID: 3,
      name: "即兴戏剧体验",
      state: "报名中",
      startTime: "8月12日13点",
      city: "深圳市",
      location: "南山区",
      address: "深圳市南山区深南大道9966号",
      fee: "99.9元",
      discount: "会员-20%",
      img: "https://gaoimg.com/wp-content/uploads/2023/02/c5c00f92eeb48e3f5f90.jpg",
      kitchenName: "戏剧小屋",
      isMemberOnly: false,
    },
    {
      ID: 4,
      name: "城市骑行",
      state: "已满员",
      startTime: "7月28日19点",
      city: "上海市",
      location: "长宁区",
      address: "上海市长宁区长宁路1018号",
      fee: "免费",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/06/b433ec42e7fcd88d-1.jpg",
      kitchenName: "骑行小队",
      isMemberOnly: false,
    },
    {
      ID: 5,
      name: "8月共读会",
      state: "报名中",
      startTime: "8月12日15点",
      city: "广州市",
      location: "白云区",
      address: "广州市白云区白云大道北199号",
      fee: "免费",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/05/0143a7e350f975e7-1.jpg",
      kitchenName: "阅读小屋",
      isMemberOnly: true,
    },
    {
      ID: 6,
      name: "财富流沙盘体验",
      state: "报名中",
      startTime: "8月20日15点",
      city: "北京市",
      location: "朝阳区",
      address: "北京市朝阳区朝阳门外大街1号",
      fee: "99.9元",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/03/0a6553ab91899856-1.jpg",
      kitchenName: "财商小屋",
      isMemberOnly: false,
    },
  ];

  return (
    <div className="flex flex-col justify-center  bg-white">
      {/* 首页banner */}
      <img className="my-10 " src={mainpageBanner} />
      {/* 精选聚会 */}
      <div className="text-xl font-medium mb-4">精选聚会</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {partyData.map((data, index) => (
          <PartyCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
