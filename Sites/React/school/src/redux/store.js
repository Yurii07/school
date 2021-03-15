import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        // other store enhancers if any
        applyMiddleware(thunk)
    )
);

export default store