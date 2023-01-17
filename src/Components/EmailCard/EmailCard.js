import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setReadStatus } from "../../Store/emailsDataSlice";

const EmailCard = ({ emailData }) => {
  const dispatch = useDispatch();
  const date = new Date(emailData.date);
  const handleClick = () => {
    dispatch(setReadStatus(emailData));
  };

  return (
    <NavLink
      to={`/`}
    >
      <div
        className="flex items-start gap-4 border-[#cfd2dc] border-[1.25px] px-5 py-1 rounded-md cursor-pointer"
        onClick={() => handleClick()}
      >
        <span className=" uppercase text-xl font-semibold text-white bg-[#e54065] w-[35px] h-[35px] mt-1 rounded-full flex justify-center items-center">
          {emailData.from.name.charAt(0)}
        </span>
        <div>
          <p>
            <span>From: </span>
            <span className=" capitalize font-medium">
              {emailData.from.name}
            </span>
            <span className="font-medium">{` <${emailData.from.email}>`}</span>
          </p>
          <p>
            <span>Subject: </span>
            <span className=" capitalize font-medium">{emailData.subject}</span>
          </p>
          <p className=" text-sm mt-0.5">{emailData.short_description}</p>
          <span className=" text-sm">
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
            <span className="ml-2 ">
              {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:
              {date.getMinutes()}
              {date.getHours() > 12 ? `pm` : `am`}
            </span>
          </span>
          {(emailData.favourite)?<span className=" text-sm font-semibold text-[#e54065] ml-10">
            favorite
          </span>:''}
          
        </div>
      </div>
    </NavLink>
  );
};

export default EmailCard;