import { Button } from "antd";
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import Card from "../components/card";
// TODO delete this text URL

const testData = {
  kn: "野生大骚风的料理坊",
  url: "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/10/8/0/CI-Denver-Parade-of-Homes_Wonderland-Homes-05-Kitchen_s4x3.jpg.rend.hgtvcom.336.252.suffix/1405385206457.jpeg",
  state: "进行中",
  ownership: "共同经营",
  parties: 5,
  joined: 10,
  reviews: 5,
  createdAt: "2022年12月15日",
  desc: "本店是元宇宙料理社交第一店！由一位重庆厨狮提供料理友谊服务，欢迎各位看官来品尝呀！",
};

const KitchenItem = (isSimple) => {
  if (isSimple) {
    return (
      <div className="w-full h-48">
        <div className="w-4/5 h-full drop-shadow-md border-grey-100 border-2 rounded-2xl p-4 flex flex-rol">
          {/* 厨房图片 */}
          <div className="w-2/5 h-full">
            <img className="w-full h-full" src={testData.url}></img>
          </div>
          {/* 右侧表述属性 */}
          <div className="ml-2 w-full flex flex-col justify-around">
            <div className="flex flex-row font-bold justify-between">
              <div>{testData.kn}</div>
              <div className="text-sky-500">{testData.ownership}</div>
            </div>
            <div>
              <div className="italic">{testData.desc}</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mx-1">{" 已举办 "}</div>
              <div className="underline font-bold">{testData.parties}</div>
              <div className="mx-1">{" 个活动 "}</div>
              <div>
                <Button className="mr-3" href="/kitchen/manage">
                  查看详情
                </Button>
                <SettingOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-48">
      <div className="w-4/5 h-full drop-shadow-md border-grey-100 border-2 rounded-2xl p-4 flex flex-rol">
        {/* 厨房图片 */}
        <div className="w-2/5 h-full">
          <img className="w-full h-full" src={testData.url}></img>
        </div>
        {/* 右侧表述属性 */}
        <div className="ml-2 w-full flex flex-col justify-around">
          <div className="flex flex-row font-bold justify-between">
            <div>{testData.kn}</div>
            <div className="text-green-500">{testData.state}</div>
          </div>
          <div className="flex flex-row">
            <div className="underline font-bold">{testData.parties}</div>
            <div className="mx-1">{" 个活动 "}</div>
            <div className="underline font-bold">{testData.joined}</div>
            <div className="mx-1">{" 好友参与次数 "}</div>
            <div className="underline font-bold">{testData.reviews}</div>
            <div className="mx-1">{" 条评论 "}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>创建于 {testData.createdAt}</div>
            <div>
              <Button className="bg-kof-yellow">邀请朋友</Button>
              <Button className="" href="/kitchen/manage">
                详情
              </Button>
              <SettingOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenItem;
