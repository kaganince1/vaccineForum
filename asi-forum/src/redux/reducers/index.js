import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import userListReducer from "./userListReducer";
import saveUserReducer from "./saveUserReducer"

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  userListReducer,
  saveUserReducer,
});

export default rootReducer;