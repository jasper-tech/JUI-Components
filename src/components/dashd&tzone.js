import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";

const getRegionAndZone = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const region = timeZone.split("/")[0];
  const zone = timeZone.split("/")[1];
  return { region, zone };
};

const DateTimeRegion = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [region, setRegion] = useState("");
  const [zone, setZone] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    const { region, zone } = getRegionAndZone();
    setRegion(region);
    setZone(zone);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className="datetime-region">
      <div className="datetime">
        <span className="date">{formattedDate}</span> |{" "}
        <span className="time">{formattedTime}</span>
      </div>
      <div className="region-zone">
        <span className="region">{region}</span> |{" "}
        <span className="zone">{zone}</span>
      </div>
    </div>
  );
};

export default DateTimeRegion;
