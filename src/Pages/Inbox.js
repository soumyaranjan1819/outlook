import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Inbox.css";
import EmailCard from "../Components/EmailCard/EmailCard";
import { fetchEmailsData } from "../Store/emailsDataSlice";
import { STATUSES } from "../Store/emailsDataSlice";
import loading from "../loading.gif";

const Inbox = () => {
  const [filterType, setFilterType] = useState("");
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.emails);

  useEffect(() => {
    dispatch(fetchEmailsData());
  }, []);

  if (status === STATUSES.LOADING) {
    return (
      <div className="flex justify-center">
        <img src={loading} alt="loadingGif" className="h-[100vh]" />
      </div>
    );
  }

  const handleChange = (event) => {
    setFilterType(event.target.value);
    console.log(event);
  };
  // console.log(filterType);

  let inbox = data.filter((i) => i.readStatus === filterType);

  return (
    <div className="mx-20 my-10">
      <header className="font-medium text-lg flex gap-7 mb-5">
        <span>Filter By:</span>
        <span>
          <input
            type="radio"
            name="filter"
            id="unread"
            value="unread"
            onChange={(e) => handleChange(e)}
            className="appearance-none"
          />
          <label htmlFor="unread" className=" px-2.5 py-1 rounded-2xl cursor-pointer">
            Unread
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="filter"
            id="read"
            value="read"
            onChange={(e) => handleChange(e)}
            className="appearance-none"
          />
          <label htmlFor="read" className=" px-2.5 py-1 rounded-2xl cursor-pointer">
            Read
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="filter"
            id="favorites"
            value="favorites"
            onChange={(e) => handleChange(e)}
            className="appearance-none"
          />
          <label htmlFor="favorites" className=" px-2.5 py-1 rounded-2xl cursor-pointer">
            Favorites
          </label>
        </span>
      </header>
      <section className="flex flex-col gap-3">
        {inbox.map((item) => (
          <EmailCard emailData={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Inbox;
