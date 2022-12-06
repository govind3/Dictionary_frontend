import {
  WORDS_UPDATE_REQUEST,
  WORDS_UPDATE_SUCCESS,
  WORDS_UPDATE_FAIL,
  WORDS_CREATE_FAIL,
  WORDS_CREATE_REQUEST,
  WORDS_CREATE_SUCCESS,
  WORDS_DELETE_FAIL,
  WORDS_DELETE_REQUEST,
  WORDS_DELETE_SUCCESS,
  WORDS_LIST_FAIL,
  WORDS_LIST_REQUEST,
  WORDS_LIST_SUCCESS,
} from "../constants/wordsConstants";

import axios from "axios";

export const listWords = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: WORDS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/words`, config);

    dispatch({
      type: WORDS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: WORDS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createWordAction = (title, content, category) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: WORDS_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/words/create`,
      { title, content, category },
      config
    );

    dispatch({
      type: WORDS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: WORDS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteWordAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WORDS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/words/${id}`, config);

    dispatch({
      type: WORDS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type:WORDS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateWordAction = (id, title, content, category) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: WORDS_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/words/${id}`,
      { title, content, category },
      config
    );

    dispatch({
      type: WORDS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: WORDS_UPDATE_FAIL,
      payload: message,
    });
  }
};