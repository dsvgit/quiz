import { propEq, find, map } from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Header, Input, Button, Segment, Checkbox } from 'semantic-ui-react';

class OptionQuestion extends Component {
  render() {
    if (this.props.quiz == null) return <Redirect to="/" />;

    const {
      history,
      quiz: {
        quiz_title,
        questions
      },
      match: {
        params: {
          id
        }
      }
    } = this.props;

    const question = find(propEq('id', id), questions);
    if (question == null) return <Redirect to="/start-screen" />;

    const {
      question_title,
      question_description,
      answers
    } = question;

    return (
      <Container text className="pt10">
        <Header as='h2'>{quiz_title}</Header>
        <div className="mb20">{question_title}</div>
        <div className="mb20">{question_description}</div>
        <div className="mb20">
          {map(x => <Option answer_title={x.answer_title} />, answers)}
        </div>
        <Button primary onClick={() => history.push('/result')}>
          Далее
        </Button>
      </Container>
    );
  }
}

class Option extends Component {
  render() {
    const {
      answer_title
    } = this.props;

    return (
      <div>
        <Checkbox label={answer_title} />
      </div>
    );
  };
}

const OptionQuestionContainer = connect(
  state => {
    return {
      quiz: state.quiz
    }
  }
)(OptionQuestion);

export default OptionQuestionContainer;
