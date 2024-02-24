import React from "react";

export const SalesFunnel = () => {
  return (
    <div class="sales-funnel-container">
      <div className="column">
        <div className="column-top">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div>
          <h2 className="column-name">Impressions</h2>
          <h3 className="count">867.4k</h3>
        </div>
      </div>
      <div className="column">
        <div className="column-top">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div>
          <h2 className="column-name">Engagement</h2>
          <h3 className="count">118k</h3>
        </div>
      </div> <div className="column">
        <div className="column-top">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div>
          <h2 className="column-name">Visits</h2>
          <h3 className="count">4.29k</h3>
        </div>
      </div> <div className="column">
        <div className="column-top">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div>
          <h2 className="column-name">Add To Carts</h2>
          <h3 className="count">984</h3>
        </div>
      </div> <div className="column">
        <div className="column-top">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div>
          <h2 className="column-name">Conversions</h2>
          <h3 className="count">49</h3>
        </div>
      </div>
    </div>
  );
};
