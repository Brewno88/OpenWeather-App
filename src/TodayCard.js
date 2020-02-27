import React from "react";
import styled from "styled-components";

const TodayCard = ({ ...props }) => {
  const date = props.today.dt_txt.slice(5, 10);
  const time = props.today.dt_txt.slice(11, 16);

  return (
    <Wrap>
      <div className="header">
        <h2 className="weather-date">Now </h2>
        <span>
          <span className="date">{date}</span>{" "}
          <span className="date">{time}</span>
        </span>
      </div>

      <div className="header">
        <h1 className="city">{props.cityName}</h1>
        <span className="temp">{props.today.main.temp}&#8451;</span>
        <span className="min_max">
          <span className="max">{props.today.main.temp_max}&#8451;</span>
          <span className="min">{props.today.main.temp_min}&#8451;</span>
        </span>
      </div>

      <h2 className="condition">{props.today.weather[0].description}</h2>

      <img
        src={`http://openweathermap.org/img/wn/${props.today.weather[0].icon}@2x.png`}
        alt=""
        className="icon"
      />
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.div`
  width: 40%;
  text-align: center;
  border: solid 2px #222;
  padding: 11px;
  border-radius: 50px;

  .weather-date {
    display: inline-block;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    .temp {
      font-weight: 600;
    }

    .min_max {
      display: inline-flex;
      flex-direction: column;

      .max {
        color: #ff0000;
      }
      .min {
        color: #0066ff;
      }
    }
  }
`;

export default TodayCard;
