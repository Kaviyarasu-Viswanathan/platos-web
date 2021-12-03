import React from "react";
import "./HomePage.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home_page">
      <Header />
      <div className="info">
        <p>Latest News and Newly Released Movies data at one place.</p>
      </div>
      <div className="info_img">
        <Link to="/page_one">
          <img
            src="https://cdn.dribbble.com/users/1488946/screenshots/8125228/___1_4x.png"
            alt=""
          />
        </Link>
        <Link to="/page_two">
          <img
            src="https://thumbs.dreamstime.com/b/online-news-update-breaking-news-banner-tiny-people-laptop-flat-cartoon-vector-illustration-announcements-189844354.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
