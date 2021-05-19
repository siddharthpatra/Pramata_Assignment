import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { MdKeyboardArrowUp } from "@react-icons/all-files/md/MdKeyboardArrowUp";

export default function dashboardHeader() {
  const [click, setClick] = useState(false);
  const [indexed, setIndexed] = useState();

  const handleClick = () => setClick(!click);

  const topData = [
    "Overview",
    "Document Family",
    "Timeline",
    "Documents",
    "Alerts",
  ];
  const bottomData = [
    "Solutions",
    "Account Research & Renegotiation",
    "Billing accuracy",
  ];

  return (
    <div id="dashContent">
      <header>
        <MdKeyboardArrowLeft />
        <div className="heading">
          <p>
            <span>Relationship</span>
          </p>
          <h4>National Bank</h4>
        </div>

        {click ? (
          <MdKeyboardArrowUp onClick={handleClick} />
        ) : (
          <MdKeyboardArrowDown onClick={handleClick} />
        )}
      </header>
      <section id="topSection">
        <ul>
          {topData.map((data, index) => {
            return index === 2 ? (
              <li
                key={index}
                className={"active"}
                onClick={() => setIndexed(index)}
              >
                <p>
                  <span>{data}</span>
                </p>
              </li>
            ) : (
              <li
                key={index}
                className={index === indexed ? "active" : "notActive"}
                onClick={() => setIndexed(index)}
              >
                <p>
                  <span>{data}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <hr />
      <section id="bottomSection">
        <ul>
          {bottomData.map((data, index) => {
            return index === 0 ? (
              <li key={index}>
                <p>
                  <span>
                    <strong>{data}</strong>
                  </span>
                </p>
              </li>
            ) : (
              <li key={index}>
                <p>
                  <span>{data}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
