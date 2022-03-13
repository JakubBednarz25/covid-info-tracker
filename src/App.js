import axios from "axios";
import { useState, useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Global from "./components/Global/Global";
import Ranking from "./components/Ranking/Ranking";

function App() {
  const [summary, setSummary] = useState();
  const [mostCases, setMostCases] = useState();
  const [mostDeaths, setMostDeaths] = useState();
  const [newCases, setNewCases] = useState();
  const [newDeaths, setNewDeaths] = useState();

  const LOADING_MESSAGE =
    "Fetching data.. If it's taking too long please consider refreshing the page.";

  const fetchSummary = async () => {
    const res = await axios.get("https://api.covid19api.com/summary");
    setSummary(res.data);
    setNewCases(
      res.data.Countries.sort((a, b) =>
        a.NewConfirmed < b.NewConfirmed ? 1 : -1
      ).slice(0, 10)
    );
    setNewDeaths(
      res.data.Countries.sort((a, b) =>
        a.NewDeaths < b.NewDeaths ? 1 : -1
      ).slice(0, 10)
    );
    setMostCases(
      res.data.Countries.sort((a, b) =>
        a.TotalConfirmed < b.TotalConfirmed ? 1 : -1
      ).slice(0, 10)
    );
    setMostDeaths(
      res.data.Countries.sort((a, b) =>
        a.TotalDeaths < b.TotalDeaths ? 1 : -1
      ).slice(0, 10)
    );
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  useEffect(() => {
    // console.log(mostCases);
    // console.log(mostDeaths);
  }, [mostCases, mostDeaths]);

  return (
    <div className="app">
      <Header />
      <div className="page">
        {summary && newCases && mostCases && newDeaths && mostDeaths ? (
          <>
            <Global data={summary.Global} />
            <Ranking data={newCases} title="Most new cases 😷" />
            <Ranking data={mostCases} title="Most confirmed total cases 😷" />
            <Ranking data={newDeaths} title="Most new deaths 💀" />
            <Ranking data={mostDeaths} title="Most total deaths 💀" />
          </>
        ) : (
          <p>{LOADING_MESSAGE}</p>
        )}
        <br />
      </div>
    </div>
  );
}

export default App;
