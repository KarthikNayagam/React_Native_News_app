import {
  SET_COUNTRY,
  SET_COUNTRY_PICKER,
  SET_ARTICLES,
} from '../actions/ActionType';

const initialState = {
  country: {
    name: 'India',
    code: 'in',
  },
  showCountryPicker: false,
  articleContent: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_COUNTRY_PICKER:
      return {
        ...state,
        showCountryPicker: action.payload,
      };
    case SET_ARTICLES:
      return {
        ...state,
        articleContent: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
