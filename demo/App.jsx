import React from "react";
//import "./App.css";
import Timeline from "./vis-timeline-react.js"; // LOCAL DEV TESTING
//import Timeline from "vis-timeline-react"; // react-app webpack will use package.json `"module": "dist/vis-timeline-react.js"` value

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <Timeline
          options={{
            width: "100%",
            height: "60px",
            stack: false,
            showMajorLabels: true,
            showCurrentTime: true,
            zoomMin: 1000000,
            type: "background",
            format: {
              minorLabels: {
                minute: "h:mma",
                hour: "ha"
              }
            }
          }}
        />
      </main>
    </div>
  );
}

export default App;
