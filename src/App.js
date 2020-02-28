import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import openWeather from "./api/openWeather";
import TodayCard from "./TodayCard";
import DayCard from "./DayCard";

const App = () => {
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const response = await openWeather.get("/forecast", {
      params: {
        q: "London",
        appid: "94a45afae7581212919abed641621327",
        units: "metric"
      }
    });
    setData(response.data);
  };

  return data === null ? (
    <>
      <GlobalStyle />
      <button className="getWeather" onClick={getWeather}>
        get Weather
      </button>
    </>
  ) : (
    <Wrap>
      <GlobalStyle />
      <TodayCard today={data.list[0]} cityName={data.city.name} />
      <div className="dayCard-wrap">
        {data.list.map(el => {
          return el.dt_txt.includes("12:00:00") ? (
            <DayCard data={el} key={el.dt} />
          ) : null;
        })}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: solid 6px #222;
  padding: 25px;
  border-radius: 50px;
  box-shadow: 6px 7px #f60;

  .dayCard-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
const GlobalStyle = createGlobalStyle`
body, html{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5%;

button {
	border: none;
	background: none;
	cursor: pointer;
	border: solid 3px #222;
	border-radius: 50px;
	box-shadow: 2px 4px #f60;
	padding: 10px;
	width: 13rem;
	height: 5rem;
	font-size: 1.5rem;
  &:hover{
    transform: translate3d(2px, 2px, 2px)
  }
}
}
`;

export default App;
