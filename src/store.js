import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import { wordListReducer,wordCreateReducer,wordUpdateReducer,wordDeleteReducer } from "./reducers/wordsReducers";

const reducer = combineReducers({
  // this will contain our reducers
  wordList: wordListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  wordCreate: wordCreateReducer,
  wordUpdate: wordUpdateReducer,
  wordDelete: wordDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;