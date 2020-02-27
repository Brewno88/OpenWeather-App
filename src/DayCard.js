import React from "react";
import styled from "styled-components";

const DayCard = ({ data }) => {
  const date = data.dt_txt.slice(5, 10);
  const time = data.dt_txt.slice(11, 16);

  return (
    <Wrap>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <span className="temp">{data.temp}</span>
      <h2 className="condition">{data.weather[0].description}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt=""
        className="icon"
      />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  margin: 10px 10px;
  border: 2px solid #999;
  border-radius: 20px;
  padding: 1rem;

  text-align: center;
`;

export default DayCard;
