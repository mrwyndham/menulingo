import { GET_MENU, SET_LANGUAGE, SET_LOADING, MENU_ERROR } from "./types";

export const getMenu = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      "http://192.168.0.61:5000/api/v1/menus/5e3c0da1c4174b0a6cd0ef52"
    );
    const data = await res.json();

    dispatch({
      type: GET_MENU,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MENU_ERROR,
      payload: "error"
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const setLanguage = lang => {
  return {
    type: SET_LANGUAGE,
    payload: lang
  };
};
