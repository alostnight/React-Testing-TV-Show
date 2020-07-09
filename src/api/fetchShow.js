import React, { useState, useEffect } from "react";
import axios from "axios";

export const fetchshow = () => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = () => {
      axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then((res) => {
          setShow(res.data);
          setSeasons(formatSeasons(res.data._embedded.episodes));
        });
    };
    fetchShow();
  }, []);

  const handleSelect = (e) => {
    setSelectedSeason(e.value);
  };
};
