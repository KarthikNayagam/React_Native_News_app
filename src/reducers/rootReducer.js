import {SET_COUNTRY, SET_COUNTRY_PICKER} from '../actions/ActionType';

const initialState = {
  country: {
    name: 'India',
    code: 'in',
  },
  showCountryPicker: false,
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
    default:
      return state;
  }
};

export default rootReducer;
