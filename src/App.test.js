import React from "react";
import App from "./App";
import { render, queryAllByAltText, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShows } from "./api/fetchShow";

jest.mock("./api/fetchShow");

const mockData = {
  image: { img: "img" },
  name: "name",
  summary: "summary",
  _embedded: {
    episodes: [
      {
        id: "1546",
        image: { medium: "medium_image" },
        name: "name",
        season: 2,
        number: 5,
        summary: "<p>Summary</p>",
        runtime: 30,
      },
    ],
  },
};

const showData = {
  data: [
    {
      id: 553946,
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
      },
      name: "Chapter One: The Vanishing of Will Byers",
      number: 1,
      runtime: 60,
      season: 1,
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    },
    {
      id: 578668,
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168925.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168925.jpg",
      },
      name: "Chapter Seven: The Bathtub",
      number: 7,
      runtime: 60,
      season: 1,
      summary:
        "<p>Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.</p>",
      url:
        "http://www.tvmaze.com/episodes/578668/stranger-things-1x07-chapter-seven-the-bathtub",
    },
  ],
  image: {
    medium:
      "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    original:
      "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
  },
};

test("App fetches show data and renders", async () => {
  mockFetchShows.mockResolvedValueOnce(mockData);
  const { rerender, getByText } = render(<App />);

  await waitFor(() => {
    expect(getByText("name")).toBeInTheDocument();
  });
});
