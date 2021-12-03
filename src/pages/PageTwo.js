import axios from "axios";
import React from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import db from "./firebase/firebase";
import { useState, useEffect } from "react";
import firebase from "firebase";
import "./PageTwo.css";
function PageTwo() {
  const [info, setInfo] = useState([]);
  /*   const Fetchdata = async () => {
    const response = db.collection("movies");
    const data = await response.get();
    data.docs.forEach((item) => {
      setInfo([...info, item.data()]);
    });
  };
  useEffect(() => {
    Fetchdata();
  }, [info]); */

  const ref = firebase.firestore().collection("movies");
  function movieData() {
    ref.onSnapshot((querySnapshot) => {
      const movie = [];
      querySnapshot.forEach((doc) => {
        movie.push(doc.data());
      });
      setInfo(movie);
    });
  }
  useEffect(() => {
    movieData();
  }, []);

  console.log(info);
  return (
    <div className="page_two">
      <Header />
      <div className="post_data">
        {info.map((article) => (
          <Post img={article.image} title={article.title} />
        ))}
      </div>
    </div>
  );
}

export default PageTwo;
