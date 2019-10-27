import {Types} from "./types";

export const loadQuestionsRequest = () => ({
    type: Types.LOAD_QUESTIONS_REQUEST,
    payload: {
        isLoading: true,
        showError: false
    }
});

export const loadQuestionsSuccess = ({questions}) => ({
    type: Types.LOAD_QUESTIONS_SUCCESS,
    payload: {
        isLoading: false,
        currentQuestion: 0,
        questions
    }
});

export const unhandledError = () => ({
    type: Types.LOAD_QUESTIONS_ERROR,
    payload: {
        isLoading: false,
        showError: true
    }
});

export const submitAnswerRequest = (question, answer) => ({
    type: Types.SUBMIT_ANSWER,
    payload: {
        question: question,
        answer: answer,
    }
});

export const incQuestion = (question) => ({
    type: Types.NEXT_QUESTION,
    payload: {
        currentQuestion: question
    }
});

export const showResults = () => ({
    type: Types.SHOW_RESULTS,
    payload: {
        showResults: true
    }
});

export const resetGame = () => ({
    type: Types.RESET,
});

