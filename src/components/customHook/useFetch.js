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
