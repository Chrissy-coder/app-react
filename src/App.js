import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Auckland" />
        <footer>
          This react project was coded by Christine Soropa on
          <a
            href="https://github.com/Chrissy-coder/app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://jazzy-semolina-235010.netlify.app/"> Netlify. </a>
        </footer>
      </div>
    </div>
  );
}
