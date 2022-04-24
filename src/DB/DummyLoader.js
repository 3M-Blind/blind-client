import axios from "axios";
import { useEffect, useState } from "react";

var ARTICLE_LIST_URL = "http://localhost:3001/ArticleList";
var TOPIC_LIST_URL = "http://localhost:3001/topicLlist";

export function useTopicBestArticles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(ARTICLE_LIST_URL).then((res) => {
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
    axios.get(ARTICLE_LIST_URL + `?postID=${postID}`).then((res) => {
      setData(res.data[0]);
    });
  }, []);

  return data;
}

export function useTopicList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(TOPIC_LIST_URL).then((res) => {
      setData(res.data);
    });
  }, []);

  return data;
}
