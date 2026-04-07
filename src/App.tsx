// Allows for the page to update by changing components instead of loading new page
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styling and functionality for Clerk
import "./App.css";
import { Show, SignInButton, UserButton, useUser } from "@clerk/react";

// Relative path to the report_latest.json
import weatherData from "../../environmental-monitor-backend/bin/Debug/net10.0/reports/report_latest.json";

/** Formats temperatures to be no more than 2 decimals and no trailing zeroes. */
const formatTemp = (temp: number) => parseFloat(temp.toFixed(2)).toString();

/** Top navigation bar. */
const NavBar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-slate-900 to-[#60298E]">
      <NavBarLeft />
      <NavBarCenter />
      <NavBarRight />
    </div>
  );
};

/** Left navbar is logo. */
const NavBarLeft = () => {
  return (
    <div className="navbar-left">
      {/** Weather icons created by iconixar - Flaticon */}
      <a href="/">
        <img
          src="/favicon.png"
          alt="A picture of the sun partially obscured by a cloud."
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

/** Specifies that the navbar buttons must take two strings: a name and a link (href). */
interface NavBarButtonProps {
  name: string;
  link: string;
}

/** Component for the buttons on the navbar. */
const NavBarButton = ({ name, link }: NavBarButtonProps) => {
  return (
    <div>
      <button className="navbar-button cursor-pointer w-40 bg-black/20 backdrop-blur-sm p-2 rounded-lg shadow">
        <a href={link}>{name}</a>
      </button>
    </div>
  );
};

/** Center navbar is links. */
const NavBarCenter = () => {
  return (
    <div className="navbar-center absolute left-1/2 -translate-x-1/2">
      <ul className="nav-links gap-2">
        <li>
          <NavBarButton name="Weather" link="/" />
        </li>

        <li>
          <NavBarButton name="Report" link="/report" />
        </li>

        <li>
          <NavBarButton name="About" link="/about" />
        </li>
      </ul>
    </div>
  );
};

/** Right navbar is login. */
const NavBarRight = () => {
  return (
    <div className="navbar-right flex gap-4">
      {/** Signed out */}
      <Show when="signed-out">
        <SignInButton>
          <button className="weather-card cursor-pointer bg-black/20 backdrop-blur-sm p-2 w-20 rounded-lg shadow">
            Login
          </button>
        </SignInButton>
      </Show>

      {/** Signed in */}
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
};

/** Shows a picture of clouds and the main site title. */
const Banner = () => {
  return (
    <div className="flex items-center justify-center h-40 banner-bg">
      <h1 className="header-text pt-12">Environmental Monitor App</h1>
    </div>
  );
};

/** Specifies that the weather card component must take two strings. */
interface WeatherCardProps {
  title: string;
  content: string;
}

/** Defines the weather card component which has two props: a title and content. */
const WeatherCard = ({ title, content }: WeatherCardProps) => {
  return (
    <div className="weather-card bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
      <p className="text-sm text-white">{title}</p>
      <h2 className="text-2xl font-bold">{content}</h2>
    </div>
  );
};

/** Component for the inside weather summary. */
const InsideWeatherSummary = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-[#60298E] pt-8 px-6">
      <WeatherCard
        title="Inside Summary"
        content={weatherData.inside.inside_summary}
      />
    </div>
  );
};

/** Component for the inside weather dashboard. */
const InsideWeatherDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-[#60298E] p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherCard
          title="Temperature"
          content={`${formatTemp(weatherData.inside.temperatureF)} °F
          (${formatTemp(weatherData.inside.temperatureC)} °C)`}
        />

        <WeatherCard
          title="Humidity"
          content={`${formatTemp(weatherData.inside.humidity)}%`}
        />
      </div>
    </div>
  );
};

/** Component for the inside weather summary. */
const OutsideWeatherSummary = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-[#60298E] pt-2 px-6">
      <WeatherCard
        title="Outside Summary"
        content="Placeholder for the outside summary! Replace this when you make one!"
      />
    </div>
  );
};

/** Decides which icon to show based on weather code. */
const WeatherIconDecider = () => {
  switch (weatherData.outside.weather_name) {
    // Clear skies
    case "Clear sky":
    case "Mainly clear":
      return <img src="/sun.png" alt="Clear sky" className="w-8 h-8" />;

    // Parly cloudy
    case "Partly cloudy":
      return (
        <img src="/partly-cloudy.png" alt="Partly cloudy" className="w-8 h-8" />
      );

    // Cloudy, overcast, foggy
    case "Overcast":
    case "Fog":
    case "Depositing rime fog":
      return (
        <img
          src="/cloudy.png"
          alt="Cloudy, overcast, foggy"
          className="w-8 h-8"
        />
      );

    // Drizzle
    case "Light drizzle":
    case "Moderate drizzle":
    case "Dense drizzle":
    case "Light freezing drizzle":
    case "Dense freezing drizzle":
      return <img src="/drizzle.png" alt="Drizzle" className="w-8 h-8" />;

    // Rain
    case "Slight rain":
    case "Moderate rain":
    case "Heavy rain":
    case "Light freezing rain":
    case "Heavy freezing rain":
    case "Slight rain showers":
    case "Moderate rain showers":
    case "Violent rain showers":
      return <img src="/rain.png" alt="Rain" className="w-8 h-8" />;

    // Thunderstorms
    case "Thunderstorm":
    case "Thunderstorm with slight hail":
    case "Thunderstorm with heavy hail":
      return <img src="/storm.png" alt="Thunderstorms" className="w-8 h-8" />;

    // Snow
    case "Slight snow fall":
    case "Moderate snow fall":
    case "Heavy snow fall":
    case "Snow grains":
    case "Slight snow showers":
    case "Heavy snow showers":
      return <img src="/snow.png" alt="Snow" className="w-8 h-8" />;

    default:
      return <p>No match</p>;
  }
};

/** Weather card but only takes one in-line prop: content (string). */
const WeatherCardWithIcon = ({ content }: { content: string }) => {
  return (
    <div className="weather-card bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow flex items-center justify-center gap-2">
      <h2 className="text-2xl font-bold">{content}</h2>
      <WeatherIconDecider />
    </div>
  );
};

/** Component for the outside weather dashboard. */
const OutsideWeatherDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-[#60298E] pt-2 pb-6 px-6">
      {/** Defines how the grid is structured for this component */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <WeatherCardWithIcon content={weatherData.outside.weather_name} />

        <WeatherCard
          title="Temperature"
          content={`${formatTemp(weatherData.outside.temperature_2m_fahrenheit)} °F
          (${formatTemp(weatherData.outside.temperature_2m)} °C)`}
        />

        <WeatherCard
          title="Feels Like"
          content={`${formatTemp(weatherData.outside.apparent_temperature_fahrenheit)} °F
            (${formatTemp(weatherData.outside.apparent_temperature)} °C)`}
        />

        <WeatherCard
          title="Humidity"
          content={`${formatTemp(weatherData.outside.relative_humidity_2m)}%`}
        />

        <WeatherCard
          title="Daylight"
          content={weatherData.outside.is_day_yesorno}
        />

        <WeatherCard
          title="Cloudy"
          content={`${weatherData.outside.cloud_cover}%`}
        />

        <WeatherCard
          title="Wind Speed"
          content={`${weatherData.outside.wind_speed_10m} miles per hour`}
        />

        {/** Shows where the wind is coming from, not where it's going */}
        <WeatherCard
          title="Wind Direction"
          content={`${weatherData.outside.wind_direction_10m_compass}
            (${weatherData.outside.wind_direction_10m}°)`}
        />

        {/** Conditional in case there is no precipitation */}
        <WeatherCard
          title="Precipitation"
          content={
            // If precipitation is zero, say none, else show amount
            weatherData.outside.precipitation === 0
              ? "None"
              : `{weatherData.outside.precipitation} inches`
          }
        />

        <WeatherCard
          title="Rain"
          content={
            weatherData.outside.rain === 0
              ? "None"
              : `{weatherData.outside.rain} inches`
          }
        />

        <WeatherCard
          title="Showers"
          content={
            weatherData.outside.showers === 0
              ? "None"
              : `{weatherData.outside.showers} inches`
          }
        />

        <WeatherCard
          title="Snowfall"
          content={
            weatherData.outside.snowfall === 0
              ? "None"
              : `{weatherData.outside.snowfall} inches`
          }
        />
      </div>
    </div>
  );
};

/** Taken from the OpenStreetMap site to embed on the site. */
const OpenStreetMap = () => {
  return (
    <div className="w-200 pt-12 mx-auto">
      <div>
        <iframe
          width="900"
          height="300"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-82.21352577209474%2C36.58000536706752%2C-82.17327117919923%2C36.605916527931974&amp;layer=mapnik"
          style={{ border: "1px solid black" }}
        />
      </div>
      <div className="pt-4">
        <a
          target="_blank"
          href="https://www.openstreetmap.org/?#map=15/36.59296/-82.19340"
        >
          View Larger Map
        </a>
      </div>
    </div>
  );
};

/** Footer element of the page. */
const BottomBar = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto h-px bg-gray-400 my-6"></div>
      <div className="pb-6">Copyright 2026</div>
    </div>
  );
};

/** Welcome message that change based on if user is logged in */
const WelcomeMessage = () => {
  const { user } = useUser();
  return (
    <div className="bg-gradient-to-r from-slate-900 to-[#60298E] pt-8 px-6">
      {/** Welcome new user and inform them of login */}
      <Show when="signed-out">
        <div className="weather-card bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">
            Welcome to the Environmental Monitor App!
          </p>
          <h2 className="text-2xl font-bold">
            Login or register for a personalized weather forecast.
          </h2>
        </div>
      </Show>

      {/** Welcome user back if they are logged in */}
      <Show when="signed-in">
        <div className="weather-card bg-black/20 backdrop-blur-sm p-4 rounded-lg shadow">
          <p className="text-sm text-white">Welcome back, {user?.firstName}</p>
          <h2 className="text-2xl font-bold">
            Here's your weather forecast for Bristol, TN
          </h2>
        </div>
      </Show>
    </div>
  );
};

/** Represents the weather page. */
const Weather = () => {
  return (
    <div>
      <WelcomeMessage />
      <InsideWeatherSummary />
      <InsideWeatherDashboard />
      <OutsideWeatherSummary />
      <OutsideWeatherDashboard />
      <OpenStreetMap />
    </div>
  );
};

/** Represents the report page. */
const Report = () => {
  return <div></div>;
};

/** Represents the about page. */
const About = () => {
  return <div></div>;
};

/** Main function of the app. */
function MyApp() {
  return (
    <BrowserRouter>
      <div>
        {/** Header starts here */}
        <header>
          <NavBar />
        </header>

        {/** Main starts here */}
        <main>
          <Banner />
          <Routes>
            {/** Updates the page by changing components */}
            <Route path="/" element={<Weather />} />
            <Route path="/report" element={<Report />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/** Footer starts here */}
        <footer>
          <BottomBar />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default MyApp;
