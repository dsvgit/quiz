import React, { Component } from 'react';
import { connect } from 'react-redux';

class Quiz extends Component {
  render() {
    const { quiz } = this.props;
    if (quiz == null) return null;

    const {
      quiz: {
        quiz_title
      }
    } = this.props;

    return (
      <div>
        <div>{quiz_title}</div>

      </div>
    );
  }
}

const QuizContainer = connect(
  state => {
    return {
      quiz: state.quiz
    }
  }
)(Quiz);

export default QuizContainer;
