import "./Ranking.scss";

import Flag from "../Flag/Flag";

const Ranking = ({ data, title }) => {
  return (
    <div className="ranking">
      <h2>{title}</h2>
      {/* <hr /> */}
      <ul>
        {data.map((country, index) => {
          console.log(country);
          return (
            <li key={country.Slug}>
              <h1>
                {index + 1}
                <sup>
                  {index === 0
                    ? "st"
                    : index === 1
                    ? "nd"
                    : index === 2
                    ? "rd"
                    : "th"}
                </sup>
              </h1>
              <div className="info">
                <Flag code={country.CountryCode} />
                <h3>
                  {country.Country === "Russian Federation"
                    ? "Russia"
                    : country.Country === "United States of America"
                    ? "USA"
                    : country.Country === "United Kingdom"
                    ? "UK"
                    : country.Country}
                </h3>
                <p>{country.TotalConfirmed.toLocaleString()}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ranking;
