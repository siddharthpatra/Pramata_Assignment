import React from "react";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import { BiMinus } from "@react-icons/all-files/bi/BiMinus";
import { TiTimes } from "@react-icons/all-files/ti/TiTimes";

const RightSide = () => {
  return (
    <div className="container">
      <header>
        <h6>Timeline</h6>
      </header>
      <div id="timelineInput">
        <p>
          <span>
            <i>Select focus year</i>
          </span>
        </p>
        <input
          type="range"
          min="2003"
          max="2022"
          step="2"
          defaultValue="2012"
        />
        <div className="rangeDate">
          <div className="dateValues">
            <p>
              <span>2003</span>
              <span> Start</span>
            </p>
          </div>
          <div className="dateValues">
            <p>
              <span>2005</span>
              <span> +1</span>
            </p>
          </div>
          <div className="dateValues">
            <p>
              <span>2008</span>
              <span> +3</span>
            </p>
          </div>
          <div className="dateValues">
            <p>
              <span>2010</span>
              <span> +5</span>
            </p>
          </div>
          <div className="dateValues">
            <p>
              <span>2018</span>
              <span> Today</span>
            </p>
          </div>
          <div className="dateValues">
            <p>
              <span>2019</span>
              <span> Renewal</span>
            </p>
          </div>
          <div className="dateValues">
            <p>
              <span>2021</span>
              <span> Renewal</span>
            </p>
          </div>
          <div className="dateValues">
            <p>
              <span>2021</span>
              <span> Last Renewal</span>
            </p>
          </div>
        </div>
      </div>
      <div className="timelineContainer">
        <div className="timelinebar-container floatLeft">
          <div className="timeline-bar" style={{ height: "50px" }}></div>
          <div className="timeline-date">
            <p>
              <span style={{ fontSize: "12px" }}>2018</span>
              <span>
                <strong>July 30</strong>
              </span>
            </p>
          </div>
          <div className="timeline-bar" style={{ height: "250px" }}></div>
          <div className="timeline-date">
            <p>
              <span style={{ fontSize: "12px" }}>2010</span>
              <span>
                <strong>Dec 30</strong>
              </span>
            </p>
          </div>
          <div className="timeline-bar" style={{ height: "80px" }}></div>
          <div className="timeline-date">
            <p>
              <span style={{ fontSize: "12px" }}>2010</span>
              <span>
                <strong>Oct 3</strong>
              </span>
            </p>
          </div>
        </div>
        <div className="timelineContent floatRight">
          <div className="timelineBox" style={{ flexGrow: "1" }}>
            <h6>Quote #33 : Colocation</h6>
            <p>
              <BsPlus />
              <span>30 Products &amp; Services Sold</span>
            </p>
            <p>
              <BsPlus />
              <span>Price Increases</span>
            </p>
            <p>
              <BiMinus />
              <span>Agreement Term</span>
            </p>
          </div>
          <div className="timelineBox" style={{ flexGrow: "3" }}>
            <h6>Quote #32 : Colocation</h6>
            <p>
              <BiMinus />
              <span>20 Products &amp; Services Sold</span>
            </p>
            <p>
              <TiTimes />
              <span>10 Products &amp; Services Sold</span>
            </p>
          </div>
          <div className="timelineBox" style={{ flexGrow: "1" }}>
            <h6>Amendment</h6>
            <p>
              <BsPlus />
              <span>Limitation of Liability</span>
            </p>
            <p>
              <BiMinus />
              <span>Late Payment Penalty</span>
            </p>
            <p>
              <TiTimes />
              <span>Termination rights</span>
            </p>
          </div>
        </div>
        <div className="penaltyBox floatLeft">
          <p style={{marginBottom: "10px"}}>
            <span>Late payment Penalty</span>
          </p>
          <hr />
          <p style={{marginTop: "10px"}}>
            <span>Info:</span>
            <p>
              <span>Ammended clause from 'Quote #21': Colocation</span>
            </p>
          </p>
          <a className="floatRight" href="#">
            <i>Go to document</i>
          </a>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default RightSide;
