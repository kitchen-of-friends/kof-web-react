import React from "react";
import membershipFee from "../assets/membership-fee.png";

const MembershipFee = () => {
  return (
    <div className=" w-full">
      {/* 底部会员信息 TODO:模拟会员收款*/}
      <img className="mt-10 grow w-full" src={membershipFee} />
    </div>
  );
};
export default MembershipFee;
