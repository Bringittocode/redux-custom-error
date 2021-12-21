import { combineReducers } from "redux";

import errorMessage from "./error/reducer";

const storeApp = combineReducers({
    errorMessage,
});

export default storeApp;
