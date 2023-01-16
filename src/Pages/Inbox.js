import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import EmailCard from "../Components/EmailCard";
import { fetchEmailsData } from "../Store/emailsDataSlice";
import { STATUSES } from "../Store/emailsDataSlice";
import loading from '../loading.gif';

const Inbox = () => {
  const [filterType, setFilterType]=useState('unread')
  const dispatch = useDispatch();
  const {data, status} = useSelector((state) => state.emails);

  useEffect(() => {
    dispatch(fetchEmailsData());
  },[]);

  const activeStyle = `bg-[#e1e4ea] px-3 py-0.5 rounded-2xl`;

  if(status === STATUSES.LOADING){
    return(
      <div className="flex justify-center">
        <img src={loading} alt="loadingGif" className="h-[100vh]" />
      </div>
    )
  }

  const inbox = data.filter(i=>i.readStatus === `${filterType}`)
  // console.log([...inbox]);

  return (
    <div className="mx-20 my-10">
      <header className="font-medium text-lg flex gap-10 mb-5">
        <span>Filter By:</span>
        <span className={`${activeStyle} cursor-pointer`} onClick={()=>setFilterType('unread')} >Unread</span>
        <span className={`${activeStyle} cursor-pointer`} onClick={()=>setFilterType('read')} >Read</span>
        <span className={`${activeStyle} cursor-pointer`}>Favorites</span>
      </header>
      <section className="flex flex-col gap-3" >
        {inbox.map((item) => (
          <EmailCard emailData={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Inbox;