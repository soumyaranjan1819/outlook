import React from "react";
import EmailCard from "../Components/EmailCard";

const Home = () => {
  const emailData = {
    id: "1",
    from: { email: "bounced@flipkart.com", name: "bounced" },
    date: 1582729505000,
    subject: "Lorem Ipsum",
    short_description:
      "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
  };

  const activeStyle = `bg-[#e1e4ea] px-3 py-0.5 rounded-2xl`;

  return (
    <div className="mx-20 my-10">
      <header className="font-medium text-lg flex gap-12 mb-5">
        <span>Filter By:</span>
        <span >Unread</span>
        <span className={activeStyle}>Read</span>
        <span>Favorites</span>
      </header>
      <EmailCard emailData={emailData} />
    </div>
  );
};

export default Home;
