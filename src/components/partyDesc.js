import React, { useState } from "react";
import { Image, Carousel } from "antd";

import { WechatOutlined } from "@ant-design/icons";

const SPECIAL_CITY_LIST = ["上海市", "北京市", "天津市", "重庆市"];

const generateLocationStr = (loc) => {
  let ret = loc.province;
  if (!SPECIAL_CITY_LIST.includes(loc.city)) {
    ret = ret + " " + loc.city;
  }
  ret = ret + " " + loc.district;
  if (loc.street) {
    ret = ret + " " + loc.street;
  }
  return ret;
};

const infoGrid = (title, content) => {
  const INVITE_STR = "分享&邀请朋友们";
  const DESC_STR = "活动描述";
  return (
    <div className={title == DESC_STR ? "col-span-2" : ""}>
      <div className="font-bold">{title}</div>
      {title == INVITE_STR ? (
        <WechatOutlined />
      ) : (
        <div className="mt-1">{content}</div>
      )}
    </div>
  );
};

const PartyDesc = ({ partyData }) => {
  return (
    <div className="w-full">
      {/* Party 名称 */}
      <div className="text-2xl w-full">{partyData.name}</div>
      {/* Party 图片 */}
      <div className="my-2">
        {partyData?.imgs?.length == 1 ? (
          <Image src={partyData.imgs[0]} />
        ) : partyData?.imgs?.length > 1 ? (
          <Carousel>
            {partyData.imgs.map((item) => (
              <Image preview={false} src={item} />
            ))}
          </Carousel>
        ) : null}
      </div>
      {/* 基本信息 */}
      <div className="grid grid-cols-2 grid-row-2 gap-8">
        {/* 1.1 */}
        {infoGrid("活动类型", partyData.type)}
        {/* 1.2 */}
        {infoGrid("分享&邀请朋友们", "")}
        {/* 2.1 */}
        {infoGrid("活动地点", generateLocationStr(partyData.loc))}
        {/* 2.2 */}
        {infoGrid("活动时间", partyData.startTime + " - " + partyData.endTime)}
        {/* 3.1 */}
        {infoGrid("经费制度", partyData.budgetPolicy)}
        {/* 3.2 */}
        {infoGrid("完成方式", partyData.cookingPolicy)}
        {/* 4.1 */}
        {infoGrid("活动描述", partyData.description)}
      </div>

      {/* 活动描述 */}
    </div>
  );
};

export default PartyDesc;
