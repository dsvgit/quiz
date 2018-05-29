import { propEq, find, map } from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Header, Input, Button, Segment, Checkbox } from 'semantic-ui-react';

class Result extends Component {
  render() {
    if (this.props.quiz == null) return <Redirect to="/" />;

    const {
      history,
      quiz: {
        quiz_title,
        results: [
          {
            result_title,
            result_description
          },
          {
            result_url
          }
        ]
      }
    } = this.props;

    return (
      <Container text className="pt10">
        <Header as='h2'>{quiz_title}</Header>
        <div className="mb20">{result_title}</div>
        <div className="mb20">{result_description}</div>
        <div className="mb20">
          <a href={result_url}>{result_url}</a>
        </div>
        <Button primary onClick={() => history.push('/')}>
          На главную
        </Button>
      </Container>
    );
  }
}

const ResultContainer = connect(
  state => {
    return {
      quiz: state.quiz
    }
  }
)(Result);

export default ResultContainer;
