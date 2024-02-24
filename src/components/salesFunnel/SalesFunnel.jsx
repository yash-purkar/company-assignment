import React from "react";
import { CiFilter } from "react-icons/ci";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

export const SalesFunnel = () => {
  return (
    <div className="sales-main-container">
      <div className="heading-container">
        <CiFilter className="icon" />
        <h2 className="heading">Sales Funnel</h2>
      </div>
      <div className="sales-funnel-container">
        <div className="sales-info">
          {data.map((data) => (
            <div className="column" key={data.columnName}>
              <div className="column-top">
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <div>
                <h2 className="column-name">{data.columnName}</h2>
                <h3 className="count">{data.count}</h3>
                <div className="trend-info">
                {
                  data.upTrend ? <FaArrowTrendUp className="up-trend-icon" /> : <FaArrowTrendDown className="down-trend-icon" />
                }
                  {" "}
                  <span
                    className={
                      data.upTrend ? "up-trend-text" : "down-trend-text"
                    }
                  >
                    {data.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* funnel */}
        <div className="funnel-boxes">
          <div className="box box-1"></div>
          <div className="box box-2"></div>
          <div className="box box-3"></div>
          <div className="box box-4"></div>
          <div className="box box-5"></div>
        </div>
      </div>
    </div>
  );
};


const data = [
  {
    columnName: "Impression",
    count: "867.4k",
    percentage: +75,
    upTrend: true,
  },
  {
    columnName: "Engagement",
    count: "118k",
    percentage: +75,
    upTrend: true,
  },
  {
    columnName: "Visits",
    count: "4.29k",
    percentage: -55,
    upTrend: false,
  },
  {
    columnName: "Add To Carts",
    count: "984",
    percentage: -65,
    upTrend: false,
  },
  {
    columnName: "Conversions",
    count: "49",
    percentage: -75,
    upTrend: false,
  },
];
