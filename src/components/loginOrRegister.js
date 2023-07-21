import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

const LoginOrRegisterComponent = ({}) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (value) => {
    // TODO
    console.log("OK!");
    console.log(value);
  };

  const handleClick = (value) => {
    setIsLogin(value);
    setVisible(!visible);
  };

  return (
    <div className="flex items-center">
      <Modal
        title={isLogin ? "登录 （兄弟你回来啦！" : "注册 （欢迎加入KOF大家族！"}
        onOk={form.submit}
        onCancel={() => setVisible(false)}
        open={visible}
        cancelText={"取消"}
        okText={isLogin ? "登录" : "注册"}
      >
        <Form
          name="login"
          autoComplete="off"
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="花名"
            name="username"
            rules={[{ required: true, message: "请输入您的花名！" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入您的密码！" }]}
          >
            <Input.Password />
          </Form.Item>
          <a
            className="text-yellow-400 hover:text-yellow-400"
            onClick={() => setIsLogin(!isLogin)}
          >
            {">>"}转为{isLogin ? "注册" : "登录"}
          </a>
        </Form>
      </Modal>
      <text
        onClick={() => handleClick(true)}
        className="font-medium text-yellow-400 hover:text-yellow-400 cursor-pointer "
      >
        登录 |
      </text>
      <text
        onClick={() => handleClick(false)}
        className="font-medium text-yellow-400 hover:text-yellow-400 cursor-pointer ml-1"
      >
        注册
      </text>
    </div>
  );
};

export default LoginOrRegisterComponent;
