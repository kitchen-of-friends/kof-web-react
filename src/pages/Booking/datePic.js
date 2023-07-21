import React, { useState } from "react";
import { Calendar, Divider } from "antd";
import ReactLoading from "react-loading";
import moment from "moment";
import PartyBookingCard from "../../components/partyBookingCard";

const checkDateInvalid = (iterDate, loading) => {
  let flag = loading;
  if (moment(moment.now()).isAfter(iterDate)) {
    flag = true;
  }
  if (moment(moment(moment.now()).add(1, "M")).isBefore(iterDate)) {
    flag = true;
  }
  // Friday's Night & Saturday's Night Only
  if (iterDate.day() !== 5 && iterDate.day() !== 6) {
    flag = true;
  }
  return flag;
};

const DatePic = ({ viewParty, setViewParty }) => {
  const [hasPicked, setHasPicked] = useState(false);
  const [selectDate, setSelectDate] = useState(moment());
  const [loading, setLoading] = useState(false);

  const onClickBack = () => {
    setViewParty(false);
  };

  return (
    <div className="border-shadow shadow-md shadow-grey-500 rounded-lg p-4">
      {/* 标题部分 */}
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg font-bold">
          {/* {viewParty ? "厨房信息" : "预约饭局"} */}
          预约饭局
        </div>
        {viewParty ? (
          <div className="">
            <a className="" onClick={onClickBack}>{`<< 返回厨房`}</a>
          </div>
        ) : null}
      </div>
      <Divider className="h-1" />

      {/* 日历部分 */}
      <div className="text-md font-bold">选择日期</div>
      <div className="">
        <Calendar
          fullscreen={false}
          disabledDate={(date) => checkDateInvalid(date, loading)}
          onChange={(newDate) => {
            setHasPicked(true);
            setViewParty(true);
            setSelectDate(newDate);
          }}
        />
      </div>

      {/* 选择日期 */}
      {hasPicked && !checkDateInvalid(selectDate, loading) ? (
        <h1 className="text-md mb-8">
          {selectDate.month() + 1} 月 {selectDate.date()} 日 的活动：
        </h1>
      ) : (
        <></>
      )}

      {/* TODO Delete this when party card is done */}
      <div className="mx-4 flex justify-center">
        <button
          className={
            (loading
              ? `bg-yellow-200 cursor-wait`
              : hasPicked && !checkDateInvalid(selectDate, loading)
              ? `bg-yellow-400 hover:bg-yellow-300`
              : `bg-neutral-300 cursor-not-allowed`) +
            " text-white text-md rounded-md border-2 w-4/5 h-10 font-extrabold"
          }
          disabled={checkDateInvalid(selectDate, loading)}
          onClick={() => {
            setLoading(true);
            console.log("click submit");
          }}
        >
          <div className="flex items-center justify-center">
            {loading ? (
              <ReactLoading
                color="white"
                width={30}
                height={30}
                type="bars"
                className="mr-4"
              />
            ) : (
              <></>
            )}
            {hasPicked && !checkDateInvalid(selectDate, loading) ? (
              <div>现在预定！</div>
            ) : (
              <div>🔒 请选择有效时间</div>
            )}
          </div>
        </button>
      </div>

      {/* Party 卡片列表 */}
      <PartyBookingCard isCurrent />

      <PartyBookingCard />
      <PartyBookingCard />
    </div>
  );
};

export default DatePic;
