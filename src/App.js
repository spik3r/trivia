import React, { Component } from "react";
import Home from "./screens/home";
import "./App.css";
import { applyMiddleware, createStore, compose} from "redux";
import {Provider} from 'react-redux';
import reducers from './redux/reducers/index';
import rootSaga from "./redux/sagas/index";
import createSagaMiddleware from 'redux-saga';
import { Router, Link, Route} from 'react-router-dom';
import Quiz from "./screens/quiz";
import Results from "./screens/results";
import history from "./util/history";
import LoadingSpinner from "./components/LoadingSpinner";
class App extends Component {

  render() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    sagaMiddleware.run(rootSaga);

    return (
      <Provider store={store}>
        <Router history={history}>
            <Route exact={true} path="/" component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/results" component={Results} />
            <Route path="/loading" component={LoadingSpinner} />
        </Router>
      </Provider>
    );
  }
}


export default App;
