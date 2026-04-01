import weatherData from "../../environmental-monitor-backend/bin/Debug/net10.0/reports/report_latest.json";

/* Formats temperatures to be no more than 2 decimals and no trailing zeroes. */
const formatTemp = (temp: number) => parseFloat(temp.toFixed(2)).toString();

const InsideWeatherComponent = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-pink-500 p-6">
      <h2 className="text-3xl font-bold underline">Inside Weather</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Temperature</p>
          <h2 className="text-2xl font-bold">
            {formatTemp(weatherData.inside.temperatureF)} °F (
            {formatTemp(weatherData.inside.temperatureC)} °C)
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Humidity</p>
          <h2 className="text-2xl font-bold">
            {formatTemp(weatherData.inside.humidity)}%
          </h2>
        </div>
      </div>
    </div>
  );
};

const OutsideWeatherComponent = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
      <h2 className="text-3xl font-bold underline">Outside Weather</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Temperature</p>
          <h2 className="text-2xl font-bold">
            {formatTemp(weatherData.outside.temperature_2m_fahrenheit)} °F (
            {formatTemp(weatherData.outside.temperature_2m)} °C)
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Humidity</p>
          <h2 className="text-2xl font-bold">
            {formatTemp(weatherData.outside.relative_humidity_2m)}%
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Feels Like</p>
          <h2 className="text-2xl font-bold">
            {formatTemp(weatherData.outside.apparent_temperature_fahrenheit)} °F
            ({formatTemp(weatherData.outside.apparent_temperature)} °C)
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Daylight</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.is_day_yesorno}
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Weather</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.weather_name}
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Cloudy</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.cloud_cover}%
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Precipitation</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.precipitation} inches
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Rain</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.rain} inches
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Showers</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.showers} inches
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Snowfall</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.snowfall} inches
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Wind Speed</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.wind_speed_10m} miles per hour
          </h2>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Wind Direction</p>
          <h2 className="text-2xl font-bold">
            {weatherData.outside.snowfall}°
          </h2>
        </div>
      </div>
    </div>
  );
};

function MyApp() {
  return (
    <body>
      <div>
        {/** Navbar content starts here */}
        <nav className="navbar">
          <div className="navbar-left">
            {/** Left navbar is logo */}
            <a href="/">Logo</a>
          </div>

          {/** Center navbar is links */}
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <a href="/weather">Weather</a>
              </li>

              <li>
                <a href="/report">Report</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/** Right navbar is icons */}
          <div className="navbar-right">
            <a href="/">Icon</a>
          </div>
        </nav>

        {/** Main starts here */}
        <main>
          <div className="image-container">
            <img
              src="pexels-frostroomhead-18713933.jpg"
              alt="A picture of clouds."
            />
            <h1 className="header-text">Environmental Monitor App</h1>

            <div>
              <InsideWeatherComponent />
              <OutsideWeatherComponent />
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <iframe
              width="900"
              height="300"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-82.21352577209474%2C36.58000536706752%2C-82.17327117919923%2C36.605916527931974&amp;layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
            <br />
            <small>
              <a
                target="_blank"
                href="https://www.openstreetmap.org/?#map=15/36.59296/-82.19340"
              >
                View Larger Map
              </a>
            </small>
          </div>
        </main>

        {/** Footer starts here */}
        <footer>
          <hr />
          <div>Copyright 2026</div>
        </footer>
      </div>
    </body>
  );
}

export default MyApp;
