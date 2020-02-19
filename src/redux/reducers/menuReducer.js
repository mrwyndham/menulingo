import {
  GET_MENU,
  SET_LANGUAGE,
  SET_LOADING,
  MENU_ERROR
} from "../actions/types";

const initialState = {
  menu: null,
  loading: false,
  error: null,
  language: "en"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case MENU_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
