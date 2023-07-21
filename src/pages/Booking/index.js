import moment from "moment";
import React, { useState } from "react";
import KitchenImgCarousel from "./kitchenImgCarousel";
import NavBar from "../../components/navbar";
import KitchenDesc from "./kitchenDesc";
import DatePic from "./datePic";
import PartyDesc from "../../components/partyDesc";

// TODO Delet this test data set
const TEST_DATA = {
  imgs: [
    "https://kitchen-of-friends.s3.amazonaws.com/121666532714_.pic.jpg",
    "https://kitchen-of-friends.s3.amazonaws.com/141666532715_.pic.jpg",
    "https://kitchen-of-friends.s3.amazonaws.com/151666532715_.pic.jpg",
    "https://kitchen-of-friends.s3.amazonaws.com/131666532714_.pic_hd.jpg",
  ],
  title: "野生大骚风的料理坊",
  loc: {
    province: "上海市",
    city: "上海市",
    district: "宝山区",
    street: "",
  },
  parties: [
    {
      name: "冬日居酒屋",
      imgs: [
        "https://kitchen-of-friends-public.s3.us-west-1.amazonaws.com/stg/parties/winter_izakaya.JPG",
      ],
      type: "家庭美食聚餐",
      loc: {
        province: "上海市",
        city: "上海市",
        district: "宝山区",
        street: "",
      },
      startTime: "2022年12月18日16:46:22",
      endTime: "2022年12月18日20:46:25",
      budgetPolicy: "厨房主请客 40%，客人均摊 60%",
      cookingPolicy: "厨房主与客人共同完成",
      description:
        "大家好呀！好久没有和大家相见了，让我们在一个温馨的午后，在骚风的家里愉快地享用美味吧！",
    },
  ],
};

const BookingPage = () => {
  const [viewParty, setViewParty] = useState(false);
  return (
    <div className="sm:p-8">
      <NavBar />
      {/* Image Section */}
      <div className="mt-8">
        <h1 className="text-2xl">{TEST_DATA.title}</h1>
        <div className="my-2">
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            良心厨房
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            高分评价
          </span>
        </div>
        <KitchenImgCarousel imgs={TEST_DATA.imgs} />
      </div>
      {/* Booking Detail Section */}
      <div className="w-full overflow-hidden mt-2">
        <div
          className={`w-5/3 flex flex-row ${
            viewParty ? "-translate-x-2/5" : null
          } duration-600`}
        >
          {/* Left compo: kitchen description */}
          <div className="w-2/3">
            <KitchenDesc />
          </div>
          {/* Middle compo: date & event picker */}
          <div className="w-1/3 mx-8">
            <DatePic viewParty={viewParty} setViewParty={setViewParty} />
          </div>
          {/* Right compo: party description */}
          <div className="w-2/3">
            {/* TODO */}
            <PartyDesc partyData={TEST_DATA.parties[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
