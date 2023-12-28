import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import profilesReducer from "./profiles/profiles.reducer";
import opinionsReducer from "./opinions/opinions.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profiles: profilesReducer,
  opinions: opinionsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
