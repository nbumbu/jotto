import {combineReducers} from "redux";
import success from './successReducer';
import guessedWords from "./guessedWordsReducers";

export default combineReducers({
    success,
    guessedWords
});