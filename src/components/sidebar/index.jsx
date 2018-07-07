import React, { Component } from "react";
import List from "./list";
import Filter from "./filter";
import "./sidebar.sass";

function SideBar({ openSideBar }) {
  const isMobile = window.innerWidth < 1024;
  const sideBarMobile = isMobile ? 'sidebar--mobile' : '';

  return (
    <div className="col-md-3  no-padding-left">
      <section className={`sidebar ${openSideBar ? "sidebar--opened" : ""} ${sideBarMobile}`}>
        <img
          src="http://via.placeholder.com/300x50"
          alt="logo"
          className="sidebar__logo hidden-xs hidden-sm"
        />
        <div className="sidebar__content">
          <List />
          <Filter />
        </div>
      </section>
    </div>
  );
}

export default SideBar;
