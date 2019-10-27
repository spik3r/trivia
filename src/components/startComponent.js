import React from 'react';
import './app.css';
import {connect} from 'react-redux';
import {loadQuestionsRequest} from "../redux/actions/actions";
import history from "../util/history";

class StartComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    doRequest = () => {
        this.props.loadQuestionsRequest();
        history.push('/quiz')
    };

    render() {
        return <div className="container">
            <h1 className="centered-heading">Welcome to the Trivia Challenge!</h1>
            <h2 className="centered-heading">You will be presented with 10 True or False questions.</h2>
            <h2 className="centered-heading">Can you score 100%?</h2>
            <button className="button" onClick={this.doRequest}>BEGIN</button>
        </div>;
    }
}

const mapDispatchToProps = {
    loadQuestionsRequest,
};

function mapStateToProps(state, props) {
    return {
        questions: state.questionsReducer.questions,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartComponent);
