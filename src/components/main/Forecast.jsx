import DailyForecast from "./DailyForecast";

const Forecast = ({ weather }) => {
  return (
    <>
      <pre>{weather.description.text}</pre>
      {weather.forecasts.map((forecast) => (
        <DailyForecast key={forecast.date} forecast={forecast} />
      ))}
    </>
  );
};

export default Forecast;
