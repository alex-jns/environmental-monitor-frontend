import weatherData from 'C:/Users/ajones88/Documents/GitHub/environmental-monitor-backend/bin/Debug/net10.0/reports/report_latest.json';

const WeatherComponent = () => {
  return (
    <div>
      <p>Temp: {weatherData.outside.temperature_2m}</p>
    </div>
  )
}

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

            <WeatherComponent />

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
              <a target="_blank"
              href="https://www.openstreetmap.org/?#map=15/36.59296/-82.19340">
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
