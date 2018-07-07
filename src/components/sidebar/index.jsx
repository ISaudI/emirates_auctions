import React, { Component } from "react";
import List from "./list";
import Filter from "./filter";
import constants from "../../constants";
import "./sidebar.sass";

function SideBar({ openSideBar }) {
  const isMobile = window.innerWidth < constants.MOBILE_BREAKPOINT;
  const sideBarMobile = isMobile ? "sidebar--mobile" : "";

  return (
    <div className="col-md-3  no-padding-left">
      <section
        className={`sidebar ${
          openSideBar ? "sidebar--opened" : ""
        } ${sideBarMobile}`}
      >
        <img
          src={constants.LOGO_IMAGE}
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
