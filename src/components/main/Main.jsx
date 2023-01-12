import { useEffect, useState } from "react";
import { useAreaContext } from "../../context/AreaContext";
import Forecast from "./Forecast";

const Main = () => {
  const { selectedArea } = useAreaContext();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://weather.tsukumijima.net/api/forecast/city/" + selectedArea.id
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [selectedArea]);

  return (
    <main>
      {weather === null ? (
        <div>Now Loading...</div>
      ) : (
        <Forecast weather={weather} />
      )}
    </main>
  );
};

export default Main;
