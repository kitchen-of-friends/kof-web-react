import moment from "moment";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, message, Popconfirm } from "antd";
import receiptCode from "../../assets/receipt-code.png";
import { CheckCircleOutlined } from "@ant-design/icons";

// 这里是聚会详情数据，TODO:完善一下编撰的数据
const partyData = [
  {
    ID: 1,
    name: "科幻电影之夜",
    type: "娱乐类",
    partyDesc:
      "大家好！8月的电影之夜来啦！这次的电影主题是科幻电影！\n\n我们准备了丰富的备选电影清单，包含：《星际穿越》、《黑客帝国》、《少数派报告》、《2001太空漫游》、《这个男人来自地球》……等共20部！\n\n具体当天会播放哪两部将由在场的朋友们投票表决～\n\n观影过程中请大家保持安静，不要打扰到其他伙伴的观影体验哦～\n\n费用说明：本次活动费用仅包含观影成本，如需饮料零食或其他服务需现场另行购买！也可以自带酒水食品～\n\n为最佳观影体验，请尽量不要迟到～第二部电影播放完毕后活动自动结束，如需提前离场，请在不打扰其他伙伴的情况下离开～\n\n活动结束后，请自觉维护好场地清洁，带走产生的垃圾，谢谢！",
    startTime: "2023年8月2日20:00 ~ 2023年8月3日02:00",
    city: "北京市",
    location: "海淀区",
    address: "北京市海淀区中关村大街5号",
    fee: "19.9元",
    discount: "会员-10%",
    regestration: {
      deadLine: "2023年7月31日24:00",
      maxNum: 30,
      currentNum: 18,
    },
    img: "https://gaoimg.com/wp-content/uploads/2023/06/1682037257-76dd07e1e38de67.jpg",
    kitchenName: "电影小屋",
    kitchenHistory: "3次聚会",
    kitchenDescription:
      "我们是一个热爱电影的团队，每个月都会举办一次电影之夜，欢迎大家来参加",
    isMemberOnly: false,
  },
  {
    ID: 2,
    name: "职场主题圆桌派",
    type: "知识类",
    partyDesc:
      "Hello，欢迎新老朋友来到职场主题圆桌派～\n本次的主题是：AIGC对内容创作者是福是祸\n欢迎感兴趣的朋友们参加",
    startTime: "2023年8月10日15:00 ~ 2023年8月10日17:00",
    city: "上海市",
    location: "静安区",
    address: "上海市静安区南京西路1788号",
    fee: "39.9元",
    discount: "",
    regestration: {
      deadLine: "2023年8月6日24:00",
      maxNum: 6,
      currentNum: 5,
    },
    img: "https://gaoimg.com/wp-content/uploads/2023/04/6304a922e2944bc1-1.jpg",
    kitchenName: "职场我知道",
    kitchenHistory: "20次聚会",
    kitchenDescription: "汇聚职场精英，共同探讨职场话题",
    isMemberOnly: true,
  },
  {
    ID: 3,
    name: "即兴戏剧体验",
    type: "艺术类",
    partyDesc:
      "即兴戏剧体验是一种独特而创意的活动，让参与者在没有剧本的情况下即兴演绎角色和情节。通过表演、互动和团队合作，参与者可以尽情发挥创造力和想象力，体验戏剧的乐趣，并培养自信、表达能力和团队合作精神。\n\n 活动报名人数为可上台表演的演员人数，观众可按兴趣自动前来～",
    startTime: "2023年8月12日13:00 ~ 2023年8月12日15:00",
    city: "深圳市",
    location: "南山区",
    address: "深圳市南山区深南大道9966号",
    fee: "99.9元",
    discount: "会员-20%",
    regestration: {
      deadLine: "2023年8月10日24点",
      maxNum: 15,
      currentNum: 12,
    },
    img: "https://gaoimg.com/wp-content/uploads/2023/02/c5c00f92eeb48e3f5f90.jpg",
    kitchenName: "戏剧小屋",
    kitchenHistory: "8次聚会",
    kitchenDescription:
      "我们是一个热爱即兴戏剧，并且希望能够让更多人参与进来的的团队，每个月都会举办一次体验活动，让业余选手也能有自己的舞台，欢迎大家来参加",
    isMemberOnly: false,
  },
  {
    ID: 4,
    name: "城市骑行",
    type: "运动类",
    partyDesc:
      "周末宅家不如来骑车！\n本次骑行路线是轻松的城市骑行，小白友好哦！（用共享单车也不会累的那种～",
    startTime: "2023年7月28日9:00 ~ 2023年7月28日12:00",
    city: "上海市",
    location: "长宁区",
    address: "上海市长宁区长宁路1018号",
    fee: "免费",
    discount: "",
    regestration: {
      deadLine: "2023年7月25日24点",
      maxNum: 30,
      currentNum: 18,
    },
    img: "https://gaoimg.com/wp-content/uploads/2023/06/b433ec42e7fcd88d-1.jpg",
    kitchenName: "骑行小队",
    kitchenHistory: "16次聚会",
    kitchenDescription:
      "这里有专业的骑行教练，还有一群热爱骑行的小伙伴～我们不定期举办骑行活动，欢迎大家来参加",
    isMemberOnly: false,
  },
  {
    ID: 5,
    name: "8月共读会",
    type: "知识类",
    partyDesc:
      "本次共读会的主题是《人间失格》,请所有的小伙伴准备好书籍，我们一起来阅读交流～",
    startTime: "2023年8月20日15:00 ~ 2023年8月20日17:00",
    city: "广州市",
    location: "白云区",
    address: "广州市白云区白云大道北199号",
    fee: "免费",
    discount: "",
    regestration: {
      deadLine: "2023年7月31日24点",
      maxNum: 10,
      currentNum: 8,
    },
    img: "https://gaoimg.com/wp-content/uploads/2023/05/0143a7e350f975e7-1.jpg",
    kitchenName: "阅读小屋",
    kitchenHistory: "18次聚会",
    kitchenDescription: "每月推荐一本好书，深度阅读，尽情交流",
    isMemberOnly: true,
  },
  {
    ID: 6,
    name: "财富流沙盘体验",
    type: "知识类",
    partyDesc:
      "财富流沙盘是一款将中国传统文化与西方财富思想想融合、帮助参与者提高财富运用能力的沙盘产品。\n让你可以模拟人生的各个重要节点，快速获得感悟与成长！\n感兴趣的小伙伴快来参加！",
    startTime: "2023年8月20日15:00 ~ 2023年8月20日17:00",
    city: "北京市",
    location: "朝阳区",
    address: "北京市朝阳区朝阳门外大街1号",
    fee: "99.9元",
    discount: "",
    regestration: {
      deadLine: "2023年8月19日24点",
      maxNum: 6,
      currentNum: 3,
    },
    img: "https://gaoimg.com/wp-content/uploads/2023/03/0a6553ab91899856-1.jpg",
    kitchenName: "财商小屋",
    kitchenHistory: "2次聚会",
    kitchenDescription: "财商小屋，让你的财商更高",
    isMemberOnly: false,
  },
  {
    ID: 7,
    name: "早茶悠闲聊天局",
    type: "美食类",
    partyDesc:
      "喝喝早茶，唠唠嗑！美好的一天，从早茶开始！\n\n活动费用不包含早茶费用，请大家知晓哦！",
    startTime: "2023年8月3日09:30 ~ 2023年8月3日12:00",
    city: "广州市",
    location: "越秀区",
    address: "广州市越秀区中山五路219号",
    fee: "9.9元",
    discount: "会员免费",
    regestration: {
      deadLine: "2023年7月31日24点",
      maxNum: 20,
      currentNum: 12,
    },
    img: "https://img-qn.51miz.com/preview/photo/00/01/65/86/P-1658655-B479A6A3.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
    kitchenName: "早茶我知道",
    kitchenHistory: "22次聚会",
    kitchenDescription: "广州的早茶哪里好吃正宗，我们都知道！",
    isMemberOnly: false,
  },
  {
    ID: 8,
    name: "撸铁！撸铁！撸铁！",
    type: "运动类",
    partyDesc: "举铁！冲就完事！\n活动费用含健身房入场费用及饮料！",
    startTime: "8月13日19点",
    city: "上海市",
    location: "黄浦区",
    address: "上海市黄浦区中山南路100号",
    fee: "99.9元",
    discount: "",
    regestration: {
      deadLine: "2023年8月9日24点",
      maxNum: 10,
      currentNum: 6,
    },
    img: "https://img-qn.51miz.com/preview/photo/00/01/63/98/P-1639863-CD3BDBE4.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
    kitchenName: "举铁小队",
    kitchenHistory: "5次聚会",
    kitchenDescription: "不断挑战更重！",
    isMemberOnly: false,
  },
  {
    ID: 9,
    name: "钢琴鉴赏会",
    type: "艺术类",
    partyDesc: "钢琴鉴赏会，欣赏钢琴演奏，交流音乐心得！",
    startTime: "2023年8月28日13:00 ~ 2023年8月28日16:00",
    city: "北京市",
    location: "东城区",
    address: "北京市东城区东长安街1号",
    fee: "39.9元",
    discount: "",
    regestration: {
      deadLine: "2023年8月25日24点",
      maxNum: 8,
      currentNum: 5,
    },
    img: "https://img-qn.51miz.com/preview/photo/00/01/63/11/P-1631190-8DED5FF4.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
    kitchenName: "音乐小屋",
    kitchenHistory: "8次聚会",
    kitchenDescription: "钢琴、吉他、小提琴、萨克斯，你想听的这里都有！",
    isMemberOnly: true,
  },
  {
    ID: 10,
    name: "citywalk+探店",
    type: "娱乐类",
    partyDesc:
      "citywalk+探店，一起逛逛街，吃吃饭，聊聊天！\n本次路线来到浦东陆家嘴周边，欢迎大家下班后随时加入，探索不为人知的城市小美好！",
    startTime: "2023年7月29日16:00 ~ 2023年7月29日22:00",
    city: "上海市",
    location: "浦东新区",
    address: "上海市浦东新区陆家嘴环路",
    fee: "免费",
    discount: "",
    regestration: {
      deadLine: "2023年7月27日24点",
      maxNum: 20,
      currentNum: 11,
    },
    img: "https://img-qn.51miz.com/preview/photo/00/01/65/54/P-1655497-3F839B7A.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420",
    kitchenName: "街溜子小队",
    kitchenHistory: "8次聚会",
    kitchenDescription: "这里是戏剧小屋",
    isMemberOnly: false,
  },
];

const PartyDetailPage = () => {
  // 取到party的id
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = JSON.parse(params.get("data"));

  // 根据ID匹配对应的聚会详情
  const selectedParty = partyData.find((party) => party.ID === data);

  // 确认报名函数
  const confirm = () => {
    message.success("聚会报名成功！");
  };

  return (
    <div className="mt-10 flex flex-row items-start justify-between p-8">
      {/* 聚会图片 + 厨房主信息 */}
      <div className="w-2/5">
        <img className="w-full h-auto" src={selectedParty.img} />
        <div className="mt-8">
          <div className="font-bold text-l mb-3">厨房主信息</div>
          <div className="flex flex-row items-center">
            <div className="font-medium">{selectedParty.kitchenName}</div>
            <div className="text-sm ml-2 mr-1" style={{ color: "#4db4d1" }}>
              已认证
            </div>
            <CheckCircleOutlined style={{ color: "#4db4d1" }} />
          </div>
          <div className="mt-1 text-sm">
            已举办：{selectedParty.kitchenHistory}
          </div>
          <div className="mt-1 text-sm">
            厨房介绍：{selectedParty.kitchenDescription}
          </div>
        </div>
      </div>
      {/* 聚会描述 */}
      <div className="w-3/5 ml-10">
        {/* 聚会名称 */}
        <div className="font-bold text-2xl">{selectedParty.name}</div>
        {selectedParty.isMemberOnly === true && (
          <div className="mt-1 font-medium text-yellow-400">会员专属</div>
        )}
        {/* 详细信息 */}
        <div className="mt-10 grid grid-cols-2 grid-row-2 gap-8">
          <div>
            <div className="font-bold mb-1">活动类型</div>
            <div>{selectedParty.type}</div>
          </div>
          <div>
            <div className="font-bold mb-1">活动时间</div>
            <div>{selectedParty.startTime}</div>
          </div>
          <div>
            <div className="font-bold mb-1">活动地点</div>
            <div>
              {selectedParty.city}
              {selectedParty.location}
              {selectedParty.address}
            </div>
          </div>
          <div>
            <div className="font-bold mb-1">活动费用</div>
            <div className="flex flex-row items-center">
              <div>{selectedParty.fee}</div>
              <div className="text-sm font-medium text-yellow-400 ml-2">
                {selectedParty.discount}
              </div>
            </div>
          </div>
        </div>
        {/* 聚会描述 */}
        <div className="mt-8">
          <div className="font-bold">聚会描述</div>
          <div className="mt-1" style={{ whiteSpace: "pre-line" }}>
            {selectedParty.partyDesc}
          </div>
        </div>

        {/* 报名情况及按钮*/}
        <div className="mt-8 flex flex-row items-end justify-between">
          <div>
            <div className="font-bold">报名情况</div>
            <div className="mt-2">
              报名截止时间：{selectedParty.regestration.deadLine}
            </div>
            <div className="mt-1">
              当前已报名人数：
              {selectedParty.regestration.currentNum}人
            </div>
            <div className="mt-1">
              最大可报名人数：{selectedParty.regestration.maxNum}人
            </div>
          </div>
          {/* 报名按钮及弹窗 */}
          <Popconfirm
            title="报名聚会"
            description={
              <div>
                <div>立即确认报名本场聚会？</div>
                <img
                  className="payment-code w-40 h-40"
                  src={receiptCode}
                  alt="Payment Code"
                />
                <div className="text-xl font-bold">
                  请支付人民币 {selectedParty.fee}
                </div>
              </div>
            }
            onConfirm={confirm}
            okText="确认"
            cancelText="再想想"
            okButtonProps={{
              type: "default",
            }}
          >
            <Button>立即报名</Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default PartyDetailPage;
