import React from 'react';
import './app.css';
import {connect} from "react-redux";
import history from "../util/history";
import {resetGame} from "../redux/actions/actions";
import decodeQuestion from "../util/decoder";

class ResultsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    playAgain = () => {
        this.props.resetGame();
        history.push('/')
    };

    render() {
        const {questions, answers} = this.props;
        return <div className="container">
            <h1>You scored</h1>
            <h1>{getScore(questions, answers)}/10</h1>
            <ul id="list">
                {questions ? questions.map((question, index) => {
                    return <li key={index} className="listItem">
                        <div className="left">{question.correct_answer && question.correct_answer.toLowerCase() === JSON.stringify(answers[index]) ?
                            <i className="fas fa-plus"/>  :
                            <i className="fas fa-minus"/> }</div>
                        <div className="right">{decodeQuestion(question.question)}</div>


                    </li>
                }) : <p>Play the game to see your results</p>}
            </ul>
            <button className="button" onClick={() => this.playAgain()}>PLAY AGAIN?</button>
        </div>;
    }

};

function correctAnswer(question, answer) {
    return question.correct_answer && question.correct_answer.toLowerCase() === JSON.stringify(answer);
};

function getScore(questions, answers) {
    let total = 0;
    questions && questions.map((question, index) => {
        if (correctAnswer(question, answers[index])) {
            total++
        }
    });
    return total;
}

const mapDispatchToProps = {
    resetGame,
};


function mapStateToProps(state, props) {
    return {
        questions: state.questionsReducer.questions,
        answers: state.navReducer.answers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent);