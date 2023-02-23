import "./App.css";
import React from "react";
import Logo from "./assets/firefox-logo.png";
import Card from "./components/Card.js";
import youtube from "./assets/youtube-logo.png";
import python from "./assets/python.png";
import javascript from "./assets/JS-logo.png";
import ddg from './assets/duckduckgo.png'

export default function App() {
  return (
    <div className="container">
      <div className="browser-header">
        <img
          src={Logo}
          style={{
            width: "50px",
            height: "50px",
            marginRight: "15px",
          }}
        />
        <h1>Firefox</h1>
      </div>

      <div className="inputBox" style={
        {
          position: 'relative'
        }
      } >
        <img src={ddg} style={{
          width: '32px',
          height: '32px',
          left: '10px',
          top: '7px',
          position: 'absolute'
        }}/>
        <input
          style={{
            borderRadius: "5px",
            border: "none",
            background: "#41404B",
            color: "#fff",
            width: "350px",
            height: "45px",
            paddingLeft: '50px',
          }}
          placeholder="Search with DuckDuckGo or enter adress"
          type="text"
        />
      </div>
      <div
        className="cards-box"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card
          recursos={{
            nome: "Youtube",
            src: youtube,
            href: "https://youtube.com",
          }}
        />
        <Card
          recursos={{
            nome: "Python",
            src: python,
            href: "https://www.python.org/",
          }}
        />
        <Card
          recursos={{
            nome: "JavaScript",
            src: javascript,
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          }}
        />
      </div>
    </div>
  );
}
