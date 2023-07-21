import React from "react";
import { Button, Rate, Collapse, Avatar } from "antd";
import {
  SettingOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import UserInfo from "./userInfo";

const { Panel } = Collapse;

const ReviewCard = () => {
  return (
    <div className="rounded-lg shadow-md flex flex-col p-4">
      <UserInfo isSmall />
      <p className="mt-3">青花鱼好吃！带厨师牛！xwhduwheduwheudhw</p>
      <div className="flex flex-row items-center ">
        <LikeOutlined />
        <div className="font-medium ml-0.5">492</div>
        <div className="ml-3">回复</div>
        <div className="ml-3">投诉</div>
      </div>
      <div className="flex flex-row justify-between items-start">
        <Collapse ghost>
          <Panel header="共10条回复">
            <div className="flex flex-row">
              <Avatar size="small" style={{ backgroundColor: "F5DA00" }}>
                SC
              </Avatar>
              <div className="flex flex-col items-start">
                <div className="ml-2">SACA</div>
                <p className="mt-1 ml-2">了不起！说得对！</p>
                <div className="ml-2 flex flex-row items-center">
                  <LikeOutlined />
                  <div className="font-medium ml-0.5">25</div>
                  <div className="ml-3">回复</div>
                  <div className="ml-3">投诉</div>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
        <div className="flex flex-col items-center justify-end mr-20"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
