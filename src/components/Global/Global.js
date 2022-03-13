import React from "react";
import "./Global.scss";

const Global = ({ data }) => {
  // console.log(data);

  return (
    <div className="global">
      <h2>Global data 🌍</h2>
      <ul>
        <li>
          <h3>New Confirmed</h3>
          <p>{data.NewConfirmed.toLocaleString()}</p>
        </li>
        <li>
          <h3>Total Confirmed</h3>
          <p>{data.TotalConfirmed.toLocaleString()}</p>
        </li>
        <li>
          <h3>New Deaths</h3>
          <p>{data.NewDeaths.toLocaleString()}</p>
        </li>
        <li>
          <h3>Total Deaths</h3>
          <p>{data.TotalDeaths.toLocaleString()}</p>
        </li>
      </ul>
    </div>
  );
};

export default Global;
