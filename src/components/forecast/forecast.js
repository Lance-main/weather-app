import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      
      <label className="title" >Weekly Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 5).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label style={{color:"black", fontSize:"20px"}}>Hourly Forecast</label>
                </div>
                <div className="daily-details-grid-item">
                  <label></label>
                </div>
                <div className="daily-details-grid-item">
                  <label>9pm : 3°C</label>
                  <div className="daily-details-grid-item">
                  <label></label>
                </div>
                </div><div className="daily-details-grid-item">
                  <label>10pm : 2°C</label>
                  <div className="daily-details-grid-item">
                  <label></label>
                </div>
                </div><div className="daily-details-grid-item">
                  <label>11pm : 2°C</label>
                  <div className="daily-details-grid-item">
                  <label></label>
                </div>
                </div><div className="daily-details-grid-item">
                  <label>12am : 2°C</label>
                 <br></br>
                 <div className="daily-details-grid-item">
                  <label></label>
                </div>
                </div><div className="daily-details-grid-item">
                  <label>1am : 2°C</label>
                  <div className="daily-details-grid-item">
                  <label></label>
                </div>
                </div>
                <div className="daily-details-grid-item">
                  <label>2am : 2°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>3am : 2°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>4am : 0°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>5am : -1°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>6am : -2°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>7am : -3°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>8am : 1°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;