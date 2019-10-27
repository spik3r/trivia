import {Types} from "../actions/types";

const INITIAL_STATE = {answers:[]};

export default function navReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SUBMIT_ANSWER: {
            console.log('SUBMIT_ANSWER', action.payload);
            return {...state,
                    answers: [...state.answers, action.payload.answer]
                }
        }

        default: {
            return state;
        }
    }
}