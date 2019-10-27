import {takeEvery} from 'redux-saga/effects';
import {Types} from "../actions/types";
import * as worker from "./worker";
import {fork} from "@redux-saga/core/effects";

function* watchLoadQuestionsRequest(){
    yield takeEvery(Types.LOAD_QUESTIONS_REQUEST, worker.loadQuestions);
}

function* watchSubmitAnswer(){
    yield takeEvery(Types.SUBMIT_ANSWER, worker.nextQuestion);
}

const postsSagas = [
    fork(watchLoadQuestionsRequest),
    fork(watchSubmitAnswer),
];


export default postsSagas;