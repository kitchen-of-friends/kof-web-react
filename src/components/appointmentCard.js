import React from "react";
import UserInfo from "./userInfo";
import { Popover, Button, Form, Rate, Input } from "antd";

const data = [
  {
    time: "2022年12月11日21:03:40",
    action: "申请加入活动",
  },
  {
    time: "2022年12月13日21:03:40",
    action: "再次申请加入活动",
  },
  {
    time: "2022年12月15日21:03:40",
    action: "被批准加入活动",
  },
  {
    time: "2022年12月16日21:03:40",
    action: "参与活动",
  },
];

const logEntry = (entry) => {
  return <p>{"于 " + entry.time + " " + entry.action}</p>;
};

const generateContent = (data) => {
  return (
    <div>
      {data.map((entry) => {
        return logEntry(entry);
      })}
    </div>
  );
};

const formContent = () => {
  return (
    <Form>
      <Form.Item>
        <Rate />
      </Form.Item>
      <Form.Item>
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

const AppointmentCard = () => {
  return (
    <div className="shadow rounded-md flex flex-col p-2">
      <div className="flex flex-row justify-between">
        <UserInfo />
        <div className="text-green-400 font-bold">已确认</div>
      </div>
      {data.length == 0 ? <div>暂无记录</div> : null}
      {data.length >= 1 ? logEntry(data[0]) : null}
      {data.length >= 2 ? logEntry(data[1]) : null}
      {data.length > 3 ? (
        <Popover
          content={generateContent(data)}
          trigger="click"
          placement="bottomLeft"
        >
          <div className="max-w-fit cursor-pointer">{`展开>>`}</div>
        </Popover>
      ) : null}
      <div className="flex flex-row justify-end">
        <Button className="bg-kof-yellow text-white">通过</Button>
        <Button danger={true}>拒绝</Button>
        <Popover content={formContent}>
          <Button>评价</Button>
        </Popover>
      </div>
    </div>
  );
};

export default AppointmentCard;
