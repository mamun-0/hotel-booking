import { combineReducers } from "redux";

const signInReducer = (isLoggedIn = null, action) => {
  if (action.type === "SIGN_IN") {
    return action.payload;
  }
  return isLoggedIn;
};
const signUpReducer = (isSignUp = null, action) => {
  if (action.type === "SIGN_UP") {
    return action.payload;
  }
  return isSignUp;
};
const remainingRoom = (total = 0, action) => {
  if (action.type === "COUNT_ROOM") {
    return action.payload;
  }
  return total;
}
export default combineReducers({
  storeSignIn: signInReducer,
  storeSignUp: signUpReducer,
  remainingRoom,
});
