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
} from "antd";

import {
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  UserOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useForm } from "rc-field-form";

// TODO implement this
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const KitchenCMPage = () => {
  const { form } = useForm();

  return (
    <div className="sm:p-8">
      <NavBar />
      Kitchen Creation or Modification pages
      <div className="text-2xl">创建新厨房</div>
      <Form
        name="KitchenCreation"
        initialValues={{ remember: true }}
        form={form}
      >
        <Form.Item
          label="厨房名称"
          name="name"
          rules={[{ required: true, message: "请输入您的厨房名称！" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="location"
          label="所在区域"
          rules={[
            {
              type: "array",
              required: true,
              message: "请输入您的厨房大致位置！",
            },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          name="hostList"
          label="厨房主人"
          rules={[
            {
              type: "array",
              required: true,
              message: "请选择至少一个厨房主人！",
            },
          ]}
        >
          <UserOutlined />
          <PlusCircleOutlined />
        </Form.Item>

        <Form.Item name={"introduction"} label="厨房描述">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="上传图片" valuePropName="imgList">
          <Upload listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label="厨房创建后状态">
          <Radio.Group>
            <Radio value="online"> 上线中 </Radio>
            <Radio value="paused"> 待上线 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="厨房提供" name="offers" valuePropName="checked">
          <Checkbox.Group>
            <Checkbox>活动场地</Checkbox>
            <Checkbox>海鲜美味</Checkbox>
            <Checkbox>有趣桌游</Checkbox>
            <Checkbox>精致菜单</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Form>
      <div className="flex flex-row">
        <Button className="bg-kof-yellow">创建厨房</Button>
        <Button className="">取消</Button>
      </div>
    </div>
  );
};

export default KitchenCMPage;
