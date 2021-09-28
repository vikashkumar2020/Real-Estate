import optionreducer from "./optionreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        option : optionreducer,
    }
)
export default rootReducer;