import axios from "axios";
import { useEffect, useState } from "react";

var JSON_URL = "http://localhost:3001/ArticleList";

export function useTopicBestArticles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(JSON_URL).then((res) => {
      res.data.sort((a, b) => {
        return b.favorites - a.favorites;
      });
      setData(res.data.slice(0, 10));
    });
  }, []);

  return data;
}

export function usePostData(postID) {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(JSON_URL + `?postID=${postID}`).then((res) => {
      setData(res.data[0]);
    });
  }, []);

  return data;
}
