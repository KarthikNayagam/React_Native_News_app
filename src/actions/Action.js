import {SET_COUNTRY, SET_COUNTRY_PICKER, SET_ARTICLES} from './ActionType';

export const setCountry = (country) => {
  return {
    type: SET_COUNTRY,
    payload: country,
  };
};

export const setCountryPicker = (flag) => {
  return {
    type: SET_COUNTRY_PICKER,
    payload: flag,
  };
};

export const setArticles = (articleList) => {
  return {
    type: SET_ARTICLES,
    payload: articleList,
  };
};
