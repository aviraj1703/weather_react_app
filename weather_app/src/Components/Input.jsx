import React, { useState, useEffect } from "react";
import NoData from "./NoData";
import Nature from "./Images/Nature.png"

const Input = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Vadodara");
  const [colorr, setColorr] = useState("black");

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2071d13a1f1592475cd312f53f0b1062`;
      const response = await fetch(url);
      const response_jason = await response.json();
      setCity(response_jason.main);
      changeColor(response_jason.main);
    };
    fetchAPI();
  }, [search]);
  
  const changeColor = (e) => {
    if (!e) return;
    else {
      if (e.temp <= 20) setColorr("blue");
      else if (e.temp <= 40) setColorr("goldenrod");
      else if (e.temp <= 50) setColorr("orange");
      else setColorr("crimson");
    }
  };

  return (
    <>
      <div className="input">
        <input
          type="search"
          placeholder="Enter City Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {!city ? (
        <NoData />
      ) : (
        <div className="container">
          <div className="city">
            <i className="fas fa-map-marker-alt"></i>
            <h1>{search}</h1>
          </div>
          <div className="temp">
            <h1 style={{color : `${colorr}`}}>{city.temp}°</h1>
            <p>
              Min:{city.temp_min}° Max:{city.temp_max}°
            </p>
          </div>
          <div className="animate">
            <img src={Nature} alt="bg" />
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
