import React from 'react';
import './app.css';
import QuestionCard from "./questionCard";
import {submitAnswerRequest} from "../redux/actions/actions";
import {connect} from "react-redux";

import navTo from "../util/navigation";
import LoadingSpinner from "./LoadingSpinner";

class QuizComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    submitAnswer = (currentQuestion, answer) => {
        this.props.submitAnswerRequest(currentQuestion, answer);
    };

    isValidIndex = (num) => {
        return num !== undefined && num !== null && !isNaN(num) && num < 10;
    };

    navToResults = () => {
        navTo("results");
    };

    componentDidUpdate(prevProps) {
        if (this.props.showResults) {
            this.navToResults();
        }
    }
    render() {

        return <div className="container">
          {this.props.questions && this.isValidIndex(this.props.currentQuestion) ? <QuestionCard
                    questionIndex={this.props.currentQuestion}
                    question={this.props.questions[this.props.currentQuestion]['question']}
                    category={this.props.questions[this.props.currentQuestion]['category']}
                    numQuestions={this.props.questions.length} submitAnswer={this.submitAnswer} /> : <LoadingSpinner/>}
        </div>;
    };
}


const mapDispatchToProps = {
    submitAnswerRequest,
};

function mapStateToProps(state, props) {
    return {
        questions: state.questionsReducer.questions,
        currentQuestion: state.questionsReducer.currentQuestion,
        showResults: state.questionsReducer.showResults
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);