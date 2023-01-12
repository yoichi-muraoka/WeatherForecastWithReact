const DailyForecast = ({ forecast }) => {
  const {
    dateLabel,
    telop,
    image,
    temperature: { min, max },
  } = forecast;

  return (
    <div className="weather">
      <h2>{dateLabel}</h2>
      <p>{telop}</p>
      <p>
        <img src={image.url} alt={image.title} />
      </p>
      <p>最低気温: {min.celsius}℃</p>
      <p>最高気温: {max.celsius}℃</p>
    </div>
  );
};

export default DailyForecast;
