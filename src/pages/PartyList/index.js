import React, { useState } from "react";
import Modal from "react-modal";
import PartyCard from "../../components/partyCard";
import receiptCode from "../../assets/receipt-code.png";
import membershipFee from "../../assets/membership-fee.png";

const PartyListPage = () => {
  const types = [
    "全部",
    "美食类",
    "艺术类",
    "娱乐类",
    "运动类",
    "知识类",
    "其他",
  ];
  const cities = ["全部", "北京市", "上海市", "广州市", "深圳市"];
  const partyData = [
    {
      ID: 1,
      name: "科幻电影之夜",
      state: "报名中",
      type: "娱乐类",
      startTime: "8月2日20点",
      city: "北京市",
      location: "海淀区",
      address: "北京市海淀区中关村大街5号",
      fee: "19.9元",
      discount: "会员-10%",
      img: "https://gaoimg.com/wp-content/uploads/2023/06/1682037257-76dd07e1e38de67.jpg",
      kitchenName: "电影小屋",
      isMemberOnly: false,
    },
    {
      ID: 2,
      name: "职场主题圆桌派",
      state: "报名中",
      type: "知识类",
      startTime: "8月10日15点",
      city: "上海市",
      location: "静安区",
      address: "上海市静安区南京西路1788号",
      fee: "39.9元",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/04/6304a922e2944bc1-1.jpg",
      kitchenName: "职场我知道",
      isMemberOnly: true,
    },
    {
      ID: 3,
      name: "即兴戏剧体验",
      state: "报名中",
      type: "艺术类",
      startTime: "8月12日13点",
      city: "深圳市",
      location: "南山区",
      address: "深圳市南山区深南大道9966号",
      fee: "99.9元",
      discount: "会员-20%",
      img: "https://gaoimg.com/wp-content/uploads/2023/02/c5c00f92eeb48e3f5f90.jpg",
      kitchenName: "戏剧小屋",
      isMemberOnly: false,
    },
    {
      ID: 4,
      name: "城市骑行",
      state: "已满员",
      type: "运动类",
      startTime: "7月28日19点",
      city: "上海市",
      location: "长宁区",
      address: "上海市长宁区长宁路1018号",
      fee: "免费",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/06/b433ec42e7fcd88d-1.jpg",
      kitchenName: "骑行小队",
      isMemberOnly: false,
    },
    {
      ID: 5,
      name: "8月共读会",
      state: "报名中",
      type: "知识类",
      startTime: "8月12日15点",
      city: "广州市",
      location: "白云区",
      address: "广州市白云区白云大道北199号",
      fee: "免费",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/05/0143a7e350f975e7-1.jpg",
      kitchenName: "阅读小屋",
      isMemberOnly: true,
    },
    {
      ID: 6,
      name: "财富流沙盘体验",
      state: "报名中",
      type: "知识类",
      startTime: "8月20日15点",
      city: "北京市",
      location: "朝阳区",
      address: "北京市朝阳区朝阳门外大街1号",
      fee: "99.9元",
      discount: "",
      img: "https://gaoimg.com/wp-content/uploads/2023/03/0a6553ab91899856-1.jpg",
      kitchenName: "财商小屋",
      isMemberOnly: false,
    },
    {
      ID: 7,
      name: "早茶悠闲聊天局",
      state: "报名中",
      type: "美食类",
      startTime: "8月3日10点",
      city: "广州市",
      location: "越秀区",
      address: "广州市越秀区中山五路219号",
      fee: "9.9元",
      discount: "会员免费",
      img: "https://img-qn.51miz.com/preview/photo/00/01/65/86/P-1658655-B479A6A3.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
      kitchenName: "早茶我知道",
      isMemberOnly: false,
    },
    {
      ID: 8,
      name: "撸铁！撸铁！撸铁！",
      state: "报名中",
      type: "运动类",
      startTime: "8月13日19点",
      city: "上海市",
      location: "黄浦区",
      address: "上海市黄浦区中山南路100号",
      fee: "99.9元",
      discount: "",
      img: "https://img-qn.51miz.com/preview/photo/00/01/63/98/P-1639863-CD3BDBE4.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
      kitchenName: "举铁小队",
      isMemberOnly: false,
    },
    {
      ID: 9,
      name: "钢琴鉴赏会",
      state: "报名中",
      type: "艺术类",
      startTime: "8月28日13点",
      city: "北京市",
      location: "东城区",
      address: "北京市东城区东长安街1号",
      fee: "39.9元",
      discount: "",
      img: "https://img-qn.51miz.com/preview/photo/00/01/63/11/P-1631190-8DED5FF4.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
      kitchenName: "音乐小屋",
      isMemberOnly: true,
    },
    {
      ID: 10,
      name: "citywalk+探店",
      state: "报名中",
      type: "娱乐类",
      startTime: "7月29日16点",
      city: "上海市",
      location: "浦东新区",
      address: "上海市浦东新区陆家嘴环路",
      fee: "免费",
      discount: "",
      img: "https://img-qn.51miz.com/preview/photo/00/01/65/54/P-1655497-3F839B7A.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
      kitchenName: "街溜子小队",
      isMemberOnly: false,
    },
  ];

  // 收款码弹窗相关函数
  const [showModal, setShowModal] = useState(false);
  const handleImageClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 筛选相关函数
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedCity, setSelectedCity] = useState("全部");
  const handleCategoryClick = (type) => {
    setSelectedCategory(type);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  // 根据筛选条件过滤 PartyCard 数据
  const filteredPartyData = partyData.filter((data) => {
    if (selectedCategory === "全部" && selectedCity === "全部") {
      return true;
    }
    if (selectedCategory === "全部" && selectedCity !== "全部") {
      return data.city === selectedCity;
    }
    if (selectedCategory !== "全部" && selectedCity === "全部") {
      return data.type === selectedCategory;
    }
    return data.type === selectedCategory && data.city === selectedCity;
  });

  return (
    <div className="p-8 mt-4">
      {/* 统计数据 */}
      {/* <div className="bg-gray-200 flex flex-row items-center justify-between p-4 my-16 rounded"> */}
      {/* 已举办数量 */}
      {/* <div className="flex flex-row items-center"> */}
      {/* <div>已举办 Party 数量 </div>
            <Badge count={15} color="#faad14" /> */}
      {/* </div> */}
      {/* 头像 */}
      {/* <Avatar shape="square" /> */}
      {/* 已招待客人数量 */}
      {/* <div className="flex flex-row items-center"> */}
      {/* <div>已招待作客人次 </div>
            <Badge count={15} color="#faad14" />
          </div> */}
      {/* </div> */}
      {/* 待开始 */}
      {/* 此行开始为网页正式代码 */}
      {/* 筛选器 TODO:前端实现筛选功能 */}
      <div className="flex flex-row items-center text-gray-400">
        <div>分类：</div>
        {types.map((type, index) => (
          <div
            key={index}
            className={`mx-2 ${selectedCategory === type ? "font-bold" : ""}`}
            onClick={() => handleCategoryClick(type)}
          >
            {type}
          </div>
        ))}
      </div>
      <div className="w-full h-0.5 bg-gray-100 my-3"></div>
      <div className="flex flex-row items-center text-gray-400">
        <div>城市：</div>
        {cities.map((city, index) => (
          <div
            key={index}
            className={`mx-2 ${selectedCity === city ? "font-bold" : ""}`}
            onClick={() => handleCityClick(city)}
          >
            {city}
          </div>
        ))}
      </div>

      {/* 会员服务banner */}
      <img
        className="mt-10 grow w-full"
        src={membershipFee}
        alt="Membership Fee"
        onClick={handleImageClick}
      />

      {/* 筛选后的聚会列表 */}
      {filteredPartyData.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredPartyData.map((data, index) => (
            <PartyCard key={index} {...data} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-gray-400 text-center">暂无相关聚会</div>
      )}

      {/* 聚会列表 */}
      {/* <div className="mt-12 grid grid-rows-999 grid-cols-2 gap-3">
        {partyData.map((data, index) => (
          <PartyCard key={index} {...data} />
        ))}
      </div> */}

      {/* 收款码弹窗 */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Payment Code"
      >
        <div className="flex flex-col items-center">
          <img
            className="payment-code w-60% h-60%"
            src={receiptCode}
            alt="Payment Code"
          />
          <div className="text-xl font-bold">请支付人民币 99 元</div>
          <div className="mt-20 grid grid-cols-2 gap-4">
            <button
              className="close-button bg-gray-500 text-white h-auto w-100% p-2 rounded"
              onClick={handleCloseModal}
            >
              关闭
            </button>
            <button
              className="close-button bg-yellow-400 text-white h-auto w-100% p-2 rounded"
              onClick={handleCloseModal}
            >
              已支付
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PartyListPage;
