import { Button } from "antd";
import React from "react";

// TODO Delete this test data when finished
const TEST_DATA = {
  title: "雪中圣诞 Party",
  state: "报名中",
  startTime: "12月24日 16点",
  endTime: "18点",
  participants: "4",
};

const PartyBookingCard = ({ isCurrent }) => {
  return (
    <div className="w-full my-1 rounded-md border p-2">
      {/* Party 名称 */}
      <div className="flex flex-row justify-between">
        <div className="font-bold text-lg"> {TEST_DATA.title}</div>
        <div className="text-green-400 font-bold"> {TEST_DATA.state}</div>
      </div>
      {/* Party 时间 */}
      <div>
        {TEST_DATA.startTime} - {TEST_DATA.endTime}
      </div>
      {/* 预定/详情按钮 */}
      <div className="flex flex-row justify-between">
        <div>{TEST_DATA.participants} 人已报名</div>
        <button className={isCurrent ? `bg-kof-yellow` : `underline`}>
          {isCurrent ? "预约!" : "详情>>"}
        </button>
      </div>
    </div>
  );
};

export default PartyBookingCard;
