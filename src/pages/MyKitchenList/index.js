import React from "react";
import KitchenItem from "../../components/kitchenItem";
import NavBar from "../../components/navbar";
import { Button } from "antd";

import {
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";

const MyKitchenListPage = () => {
  return (
    <div className="sm:p-8">
      MyKitchenListPage
      <div className="flex flex-row justify-between">
        <div className="text-2xl">
          我的厨房列表
          <Button className="bg-kof-yellow text-white" href="/kitchen/create">
            创建厨房
          </Button>
        </div>

        <div className="">
          <SearchOutlined />
          <FilterOutlined />
          <SortAscendingOutlined />
        </div>
      </div>
      <KitchenItem />
    </div>
  );
};

export default MyKitchenListPage;
