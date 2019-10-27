import {combineReducers} from "redux";
import QuestionsReducer from './QuestionsReducer';
import NavReducer from "./NavReducer";
import {Types} from "../actions/types";


const appReducer = combineReducers({
    questionsReducer: QuestionsReducer,
    navReducer: NavReducer
});

const rootReducer = (state, action) => {
    if (action.type === Types.RESET) {
        state = undefined
    }
    return appReducer(state, action)
};

export default rootReducer;

