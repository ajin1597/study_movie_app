import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./components/Movies";
import ClickCounter from "./components/ClickCounter";
import Menu from "./components/Menu";

function Home() {
  return <h2>홈 컴포넌트</h2>;
}

function About() {
  return <h2>개발자소개</h2>;
}

function App(props) {
  return (
    <BrowserRouter>
      {/* <div>
        <div>
          <Link to="/">홈으로</Link>
        </div>
        <div>
          <Link to="/about">어바웃</Link>
        </div>

        <img src="https://pbs.twimg.com/profile_images/903614994843017217/_mJjygiK_400x400.jpg"></img>
      </div> */}

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ClickCounter">카운터</Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  width="15"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                홈으로
              </Link>
            </li>
            <li>
              <Link to="/popular">인기영화</Link>
            </li>
            <li>
              <Link to="/now_playing">상영중</Link>
            </li>
            <li>
              <Link to="/upcoming">개봉 예정</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/ClickCounter" element={<ClickCounter />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Movies apiPath="popular" />} />
        <Route path="/upcoming" element={<Movies apiPath="upcoming" />} />
        <Route path="/now_playing" element={<Movies apiPath="now_playing" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
