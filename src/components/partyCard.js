import { Button } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const PartyCard = (partyData) => {
  return (
    <div className="h-48 w-full border p-2 rounded flex flex-row">
      {/* 图片 */}
      <div className="w-2/5">
        <img src={partyData.img} className="object-cover h-full w-full" />
      </div>

      {/* 文字信息 */}
      <div className="w-3/5 flex flex-col justify-around ml-3">
        <div className="flex flex-row items-center">
          <div className="font-bold text-lg">{partyData.name}</div>
          {partyData.isMemberOnly === true && (
            <div className="ml-2 text-sm font-medium text-yellow-400">
              会员专属
            </div>
          )}
        </div>
        <div>
          <div className="text-sm">开始时间：{partyData.startTime}</div>
          <div className="text-sm mt-1">
            地点：{partyData.city}
            {partyData.location}
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-m font-medium ">费用：{partyData.fee}</div>
          <div className="text-sm font-medium text-yellow-400 ml-2">
            {partyData.discount}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-sm font-medium" style={{ color: "#4db4d1" }}>
            {partyData.kitchenName}
          </div>
          <Link to={`/party/detail?data=${partyData.ID}`}>
            <Button>查看详情</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
