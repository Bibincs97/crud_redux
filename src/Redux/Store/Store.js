import { applyMiddleware, createStore } from "redux";
import reducers from "../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const Store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
