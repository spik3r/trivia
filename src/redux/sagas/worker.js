import {call, put} from 'redux-saga/effects';
import * as api from "../../api";
import {unhandledError, loadQuestionsSuccess, incQuestion, showResults} from "../actions/actions";

export function* loadQuestions(action) {
    try {
        const result = yield call(api.loadQuestions);
        yield put(loadQuestionsSuccess({
            questions: result.data.results
        }));
    } catch (e) {
        console.log("error", e);
        yield put(unhandledError);
    }
}


export function* nextQuestion(action) {
    try {
        if (action.payload.question < 9) {
            yield put(incQuestion({
                currentQuestion: action.payload.question
            }));
        }
        else {
            yield put(showResults());
        }

    } catch (e) {
        console.log("error", e);
        yield put(unhandledError);
    }
}
