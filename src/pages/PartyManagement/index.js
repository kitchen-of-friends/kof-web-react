import React from "react";
import AppointmentCard from "../../components/appointmentCard";
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
  Breadcrumb,
} from "antd";

import {
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  UserOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ReviewCard from "../../components/reviewCard";

const PartyManagementPage = () => {
  return (
    <div className="sm:p-8">
      <NavBar />

      <div className="flex flex-col">
        {/* 面包屑 */}
        <Breadcrumb>
          <Breadcrumb.Item>个人主页</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">野生大骚风的料理坊</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">冬日居酒屋</a>
          </Breadcrumb.Item>
        </Breadcrumb>

        {/* 标题 + 状态 + 时间 */}
        <div className="flex flex-row">
          <h1>冬日居酒屋</h1>
          <h2>报名中</h2>
        </div>
        <div>将于 2022年12月15日 开幕</div>

        {/* 已处理的申请 */}
        <h2>已处理的申请（3）</h2>
        <div className="grid grid-cols-2">
          <AppointmentCard />
        </div>

        {/* 申请与等待列表 */}
        <h2>申请与等待列表（2）</h2>
        <div className="grid grid-cols-2">
          <AppointmentCard />
        </div>

        {/* 评论区 */}
        <h2>评论列表（3）</h2>
        <div>Party结束后再来看看吧~</div>
        <ReviewCard />

        {/* 回忆墙 */}
        <h2>回忆墙（0）</h2>
        <div>Party结束后再来看看吧~</div>
      </div>
    </div>
  );
};

export default PartyManagementPage;
