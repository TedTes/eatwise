import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import receiptReducer from "./redux/reducers/receiptReducer"; // Example reducer

const rootReducer = combineReducers({
  receipt: receiptReducer, // Add more reducers as your app grows
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
