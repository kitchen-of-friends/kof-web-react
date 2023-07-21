import React from "react";
import businessEntry from "../assets/business-entry.png";
import {
  UserOutlined,
  BankOutlined,
  FormOutlined,
  SmileOutlined,
  ClockCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Steps } from "antd";

const BusinessEntryPage = () => {
  return (
    <div>
      <img className="my-10" src={businessEntry} />
      {/* 入驻卡片 */}
      <div className="grid grid-cols-2 gap-12 mx-8 mt-12">
        {/* 个人入驻 */}
        <div className=" w-full h-auto border p-2  flex flex-col items-center justify-between">
          {/* 信息介绍 */}
          <div className="flex flex-col items-center">
            <UserOutlined
              className="mt-3"
              style={{ fontSize: "60px", color: "#facc1a" }}
            />
            <div className="mt-1 font-bold text-2xl">个人入驻</div>
          </div>
          <div className="p-6 mx-4 mt-6">
            <div>
              <span className="font-medium" style={{ color: "#facc1a" }}>
                适用于：
              </span>
              以个人名义举办活动，如活动达人、自媒体大V、领域专家等
            </div>
            <div>
              <span className="font-medium" style={{ color: "#facc1a" }}>
                所需资料：
              </span>
              个人身份证照片，联络电话及邮箱
            </div>
          </div>
          {/* 入驻按钮 */}
          <div className="w-full">
            <Button className="w-full bg-yellow-400 text-white font-bold text-xl h-auto">
              立即入驻
            </Button>
          </div>
        </div>
        {/* 商家入驻 */}
        <div className=" w-full h-auto border p-2  flex flex-col items-center justify-between">
          {/* 信息介绍 */}
          <div className="flex flex-col items-center">
            <BankOutlined
              className="mt-3"
              style={{ fontSize: "60px", color: "#4db4d1" }}
            />
            <div className="mt-1 font-bold text-2xl">企业入驻</div>
          </div>
          <div className="p-6 mx-4 mt-6">
            <div>
              <span className="font-medium" style={{ color: "#4db4d1" }}>
                适用于：
              </span>
              适用于： 以企业或组织名义举办活动，如公司、行业协会、
              社会团体、公益组织等
            </div>
            <div>
              <span className="font-medium" style={{ color: "#4db4d1" }}>
                所需资料：
              </span>
              企业营业执照或公益组织机构证件、运营人身份证正面照、运营人姓名及联络方式
            </div>
          </div>
          {/* 入驻按钮 */}
          <div className="w-full">
            <Button
              className="w-full text-white font-bold text-xl h-auto"
              style={{ backgroundColor: "#4db4d1" }}
            >
              立即入驻
            </Button>
          </div>
        </div>
      </div>
      {/* 入驻流程 */}
      <div className="mt-24">
        <div className="font-bold text-2xl text-center">入驻流程</div>
        <Steps
          className="mt-4 w-full"
          items={[
            {
              title: "准备材料",
              description: "根据入驻类型准类对应材料",
              status: "finish",
              icon: <SolutionOutlined />,
            },
            {
              title: "填写信息",
              description: "点击立即入驻按钮，填写入驻信息",
              status: "finish",
              icon: <FormOutlined />,
            },
            {
              title: "等待审核",
              description: "信息提交完毕后进入审核阶段，请耐心等待",
              status: "finish",
              icon: <ClockCircleOutlined />,
            },
            {
              title: "审核完毕",
              description: "审核完毕，发布聚会吧",
              status: "finish",
              icon: <SmileOutlined />,
            },
          ]}
        />
      </div>
      {/* 常见问题解答 */}
      <div className="mt-24">
        <div className="font-bold text-2xl text-center">常见问题解答</div>
        <div className="mt-4">
          <div>入驻审核需要多久？</div>
          <div className="mt-1 text-gray-500">
            一般在1-3个工作日内完成审核。
          </div>
        </div>
        <div className="mt-4">
          <div>入驻审核需要缴费吗？</div>
          <div className="mt-1 text-gray-500">
            审核服务费为300元/次，审核通过后永久有效。
          </div>
        </div>
        <div className="mt-4">
          <div>入驻后，可以申请退费吗？</div>
          <div className="mt-1 text-gray-500">
            不可以，300元为您的资质审核费用，一旦提交认证，无论何种情况，均不予退还。
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessEntryPage;
