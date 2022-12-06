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

export const wordListReducer = (state = { words: [] }, action) => {
  switch (action.type) {
    case WORDS_LIST_REQUEST:
      return { loading: true };
    case WORDS_LIST_SUCCESS:
      return { loading: false, words: action.payload };
    case WORDS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const wordCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WORDS_CREATE_REQUEST:
      return { loading: true };
    case WORDS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case WORDS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const wordDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WORDS_DELETE_REQUEST:
      return { loading: true };
    case WORDS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case WORDS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const wordUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case WORDS_UPDATE_REQUEST:
      return { loading: true };
    case WORDS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case WORDS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};