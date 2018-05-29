import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import store from './data/store';
import QuizLoader from './components/QuizLoader';
import Quiz from './components/Quiz';
import StartScreen from './components/Quiz/StartScreen';
import OptionQuestion from './components/Quiz/OptionQuestion';
import Result from './components/Quiz/Result';

import './App.css';
import './semantic/dist/semantic.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={QuizLoader} />
            <Route exact path="/start-screen" component={StartScreen} />
            <Route exact path="/question/:id/option" component={OptionQuestion} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
