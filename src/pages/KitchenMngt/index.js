import React from "react";
import KitchenItem from "../../components/kitchenItem";
import NavBar from "../../components/navbar";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Table,
  Rate,
} from "antd";

import {
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  UserOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const stats = [
  { number: 3, title: "个活动" },
  { number: 9, title: "次参与" },
  { number: 6, title: "条留言" },
];

const shownStat = (number, title) => {
  return (
    <div className="flex flex-col items-center" key={number + title}>
      <p className="text-2xl">{number}</p>
      <p className="text-md">{title}</p>
    </div>
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [];
for (let i = 0; i < 12; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const partyColumns = [
  {
    title: "活动名",
    dataIndex: "name",
  },
  {
    title: "状态",
    dataIndex: "state",
  },
  {
    title: "参与人数",
    dataIndex: "participantSum",
  },
  {
    title: "评论",
    dataIndex: "reviewSum",
  },
  {
    title: "开始时间",
    dataIndex: "startTime",
  },
  {
    title: "创建于",
    dataIndex: "createdAt",
  },
  {
    title: "选项",
    dataIndex: "actions",
    render: () => {
      return (
        <div className="flex flex-row items-center">
          <a>设置</a>
          <div className="mx-1">|</div>
          <a href="/party/detail">详情</a>
        </div>
      );
    },
  },
];

const reviewColumns = [
  {
    title: "评论作者",
    dataIndex: "reviewer",
  },
  {
    title: "星级",
    dataIndex: "stars",
    render: (number) => {
      return <Rate disabled defaultValue={number} />;
    },
  },
  {
    title: "摘要",
    dataIndex: "abstract",
  },
  {
    title: "详情",
    dataIndex: "detail",
  },
  {
    title: "获赞",
    dataIndex: "likeSum",
  },
  {
    title: "创建于",
    dataIndex: "createdAt",
  },
  {
    title: "选项",
    dataIndex: "actions",
    render: () => {
      return (
        <div className="flex flex-row items-center">
          <a>设置</a>
          <div className="mx-1">|</div>
          <a>详情</a>
        </div>
      );
    },
  },
];

// TODO delete test data
const testPartyData = [
  {
    key: 1,
    name: "冬日居酒屋",
    state: "已完成",
    participantSum: 5,
    reviewSum: 3,
    startTime: "2022-12-16 11:28:35",
    createdAt: "2022-12-12 11:28:44",
  },
  {
    key: 2,
    name: "中财信院上海聚",
    state: "已完成",
    participantSum: 2,
    reviewSum: 1,
    startTime: "2022-12-16 11:28:35",
    createdAt: "2022-12-12 11:28:44",
  },
  {
    key: 3,
    name: "卡坦岛之夜",
    state: "已完成",
    participantSum: 13,
    reviewSum: 10,
    startTime: "2022-12-16 11:28:35",
    createdAt: "2022-12-12 11:28:44",
  },
];

// TODO delete test data
const testReviewData = [
  {
    key: 1,
    reviewer: "野生大骚风",
    stars: "3",
    abstract: "很棒的厨房！",
    detail: "下次还想要来！",
    likeSum: "4",
    createdAt: "2022-12-16 11:40:09",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const KitchenManagementPage = () => {
  return (
    <div className="sm:p-8">
      <NavBar />

      <h1>野生大骚风的料理坊</h1>
      <div className="flex justify-around">
        {stats.map((item) => shownStat(item.number, item.title))}
      </div>

      <div className="flex flex-row justify-between">
        <h2>活动列表</h2>
        <Button className="bg-kof-yellow" href="/party/create">
          创建新活动！
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={partyColumns}
        dataSource={testPartyData}
      />

      <h2>评论列表</h2>
      <Table
        rowSelection={rowSelection}
        columns={reviewColumns}
        dataSource={testReviewData}
      />
    </div>
  );
};

export default KitchenManagementPage;
