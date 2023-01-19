import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Inbox.css";
import EmailCard from "../Components/EmailCard/EmailCard";
import { fetchEmailsData } from "../Store/emailsDataSlice";
import { STATUSES } from "../Store/emailsDataSlice";
import loading from "../loading.gif";

const Inbox = () => {
  const [filterType, setFilterType] = useState("all");
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.emails);

  const filteredInbox=()=>{
    let inbox = data;
    
    if(filterType === 'favourite')
    inbox = data.filter((i) => i.favourite === true);

    if(filterType !== 'all')
    inbox = data.filter((i) => i.readStatus === filterType);
    return inbox
  }

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
  };

  return (
    <div className="mx-20 my-10">
      <header className="font-medium text-base flex gap-4 mb-5">
        <span>Filter By:</span>

        <span>
          <input
            type="radio"
            name="filter"
            id="all"
            value="all"
            onChange={(e) => handleChange(e)}
            className="appearance-none"
            checked ={(filterType==='all')}
          />
          <label htmlFor="all" className=" px-2.5 py-1 rounded-2xl cursor-pointer">
            All
          </label>
        </span>

        <span>
          <input
            type="radio"
            name="filter"
            id="unread"
            value="unread"
            onChange={(e) => handleChange(e)}
            className="appearance-none"
            // checked ={(filterType==='unread'?true:false)}
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
        {filteredInbox().map((item) => (
          <EmailCard emailData={item} key={item.id} id={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Inbox;
