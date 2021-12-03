import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import Post from "../components/Post";
import "./PageOne.css";
import { movie } from "../redux/movie";

function PageOne() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.value.news);

  const ref = firebase.firestore().collection("news");
  const [news, setNews] = useState([]);
  function newsData() {
    ref.onSnapshot((querySnapshot) => {
      const news = [];
      querySnapshot.forEach((doc) => {
        news.push(doc.data());
      });
      setNews(news);
    });
  }
  useEffect(() => {
    newsData();
    dispatch(movie({ news }));
  }, []);

  console.log(movies);
  return (
    <div className="page_one">
      <Header />
      <div className="news_data">
        {news.map((news) => (
          <Post img={news.image} title={news.title} para={news.description} />
        ))}
      </div>
    </div>
  );
}

export default PageOne;
