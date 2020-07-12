import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";
import { fetchShow } from "./api/fetchShow";
import { formatSeasons } from "./utils/formatSeasons";
import Episodes from "./components/Episodes";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShow().then((res) => {
      setShow(res);
      setSeasons(formatSeasons(res._embedded.episodes));
    });
  }, []);

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  const handleSelect = (e) => {
    setSelectedSeason(e.value);
  };

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
