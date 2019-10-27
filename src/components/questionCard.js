import React from 'react';
import './app.css';
import decodeQuestion from "../util/decoder";

const QuestionCard = (props) => {
    const {questionIndex, question, category, numQuestions, submitAnswer} = props;
    return <div className="container">
        <h1 className="question-heading">{category}</h1>
        <div id="box">
            <h2 id="question">{decodeQuestion(question)}</h2>
        </div>
        <p>{questionIndex +1} of {numQuestions}</p>
        <div className="button-container">
            <button className="answer-button" onClick={() => submitAnswer(questionIndex, true)} >True</button>
            <button className="answer-button" onClick={() => submitAnswer(questionIndex, false)} >False</button>
        </div>
    </div>;
};

export default QuestionCard;