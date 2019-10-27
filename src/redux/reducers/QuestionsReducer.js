import {Types} from "../actions/types";

const INITIAL_STATE = {};

export default function questionsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LOAD_QUESTIONS_REQUEST: {
            console.log('LOAD_QUESTIONS_REQUEST', action.payload);
            return {...state,
                    ...action.payload,
                }
            }

        case Types.LOAD_QUESTIONS_SUCCESS: {
            console.log('LOAD_QUESTIONS_SUCCESS', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }
        case Types.LOAD_QUESTIONS_ERROR: {
            console.log('LOAD_QUESTIONS_ERROR', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }
        case Types.NEXT_QUESTION: {
            console.log('NEXT_QUESTION', action.payload);
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                showResults: action.payload.showResults
            }
        }
        default: {
            return state;
        }
    }
}