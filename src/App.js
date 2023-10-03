import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Auckland"/>
        <footer>
          This react open-source project was coded by Christine Soropa on
          <a
            href="https://github.com/Chrissy-coder/app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
