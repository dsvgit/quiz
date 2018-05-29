import { head } from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Header, Input, Button, Segment } from 'semantic-ui-react';

class Quiz extends Component {
  render() {
    if (this.props.quiz == null) return <Redirect to="/" />;

    const {
      history,
      quiz: {
        quiz_title,
        quiz_description,
        questions
      }
    } = this.props;

    const firstQuestion = head(questions);

    return (
      <Container text className="pt10">
        <Header as='h2'>{quiz_title}</Header>
        <div className="mb20">{quiz_description}</div>
        <Button primary onClick={() => firstQuestion && history.push(`/question/${firstQuestion.id}/${firstQuestion.question_kind}`)}>
          Пройти тест
        </Button>
      </Container>
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
