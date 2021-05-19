import React from "react";
import DashboardHeader from "../components/dashboardHeader";
import Navbar from "../components/navbar";
import Rightside from "../components/rightSide";

export default function page() {
  return (
    <div>
      <div id="navbar"></div>
      <div className="content">
        <div className="leftContent floatLeft displayFlex">
          <Navbar />
          <DashboardHeader />
        </div>
        <div className="rightContent floatRight">
          <Rightside />
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
