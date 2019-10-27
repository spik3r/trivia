import axios from 'axios';
const BASE_URL = 'https://opentdb.com';
const PATH_VARS = '/api.php?amount=10&difficulty=hard&type=boolean';

export function loadQuestions() {
    return axios({
        method: 'get',
        url: `${BASE_URL + PATH_VARS}`,
        config: {headers: {'Content-Type': 'application/json'}}
    });
}