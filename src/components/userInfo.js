import React, { useState } from "react";
import { Button, Rate, Collapse } from "antd";

import {
  UserOutlined,
  SmileOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

const UserInfo = ({ isSmall }) => {
  if (isSmall) {
    return (
      <div className="flex flex-row items-center">
        <Avatar size="large" style={{ backgroundColor: "F5DA00" }}>
          AL
        </Avatar>
        <div className="flex flex-col mx-2">
          <div className="flex flex-row items-center">
            <div className="mr-2">Alexander Lynch</div>
            <SmileOutlined className="mr-1" />
            <div>Level 3</div>
          </div>
          <Rate allowHalf disabled defaultValue={4.5} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row items-center">
      <Avatar size="large" style={{ backgroundColor: "F5DA00" }}>
        AL
      </Avatar>
      <div className="flex flex-col mx-2">
        <div>Alexander Lynch</div>
        <div className="flex flex-row items-center">
          <SmileOutlined className="mr-1" />
          <div>Level 3</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
