import React, { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import LoginOrRegisterComponent from "./loginOrRegister";

const navigation = [
  { name: "主页", href: "/" },
  { name: "精彩聚会", href: "/party/list" },
  { name: "成为厨房主", href: "/business/entry" },
  { name: "关于我们", href: "/about" },
];

const items = [
  {
    key: "1",
    label: <a href="/kitchen/my">我的厨房</a>,
  },
  {
    key: "2",
    label: <a href="/party/list">我的聚会</a>,
  },
  {
    key: "3",
    label: <a href="/settings">设置</a>,
  },
  {
    key: "4",
    label: <a href="#">退出</a>,
    danger: true,
  },
];

const NavBar = () => {
  return (
    <Popover>
      <div
        className="relative px-4 pt-6 sm:px-6 lg:px-8 w-full flex flex-row items-center justify-between"
        style={{ height: "58px" }}
      >
        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
          {/* 网站名称 */}
          <a href="/#">
            <h1 className="text-2xl font-bold mr-6">
              <span className="text-yellow-400">朋友家的厨房</span>
            </h1>
          </a>
          {/* 导航栏 */}
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-medium mr-6">
              {item.name}
            </a>
          ))}
        </div>

        {/* 消息及登陆注册 */}
        <div className=" hidden md:ml-10 md:pr-4 md:flex md:flex-row align-middle w-full">
          <div className="flex flex-row items-center justify-end w-full">
            {/* 登录 + 注册 */}
            <LoginOrRegisterComponent />
            {/* 厨房主中心 */}
            {/* <div className="ml-6 text-yellow-400 font-medium">厨房主中心</div> */}
            {/* 用户信息  TODO:判断登陆后再展示
            <div className="ml-6">
              <UserInfo />
            </div>
            {/* 登录后的下拉菜单 */}
            {/* <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <DownOutlined />
            </Dropdown>{" "} */}
          </div>
        </div>
      </div>

      {/* 下拉面板 */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=400"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="/#"
              className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-yellow-400 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
