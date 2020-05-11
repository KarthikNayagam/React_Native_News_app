import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const useFetchMultiple = (getSources, getArticles, code) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState('');
  const [categories, setCategories] = useState('');
  useEffect(() => {
    setLoading(true);
    setArticles([]);
    axios.all([getSources, getArticles]).then(
      axios.spread((...allData) => {
        console.log('allData[0]', allData[1]);
        setArticles(allData[1].data);
        setCategories(allData[0].data);
        setLoading(false);
      }),
    );
  }, [code]);
  return {categories, articles, loading};
};

export const useFetch = (code, heading) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${code}&category=${heading}&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
      )
      .then((res) => {
        setResponse(res.data.articles);
        setLoading(false);
      });
  }, [heading]);

  return {response, loading};
};
