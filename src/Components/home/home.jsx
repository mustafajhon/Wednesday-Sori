import React from "react";
import "./home.css";
function Home() {
  return (
    <>
      <div className="container">
        <h1>Home Page</h1>
      </div>

      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
