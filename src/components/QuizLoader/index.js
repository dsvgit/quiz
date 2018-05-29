import { map } from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Input, Button, Segment } from 'semantic-ui-react';

function makeid(length = 5)
{
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for(var i=0; i < length; i++)
  {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

class QuizLoader extends Component {
  state = {
    fileUrl: 'greentask.in/upload/original/attachments/18/05/29/48/2053da33-548f-4bb6-6413-c093fa1e0ef5.json'
  };

  loadQuiz = () => {
    const { onQuizLoaded, history } = this.props;

    var xmlhttp = new XMLHttpRequest();
    var url = 'https://' + this.state.fileUrl;

    if (!url.trim()) return;

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        try {
          var quiz = JSON.parse(this.responseText);

          onQuizLoaded({
            ...quiz,
            questions: map(q => ({ ...q, id: makeid() }), quiz.questions)
          });

          history.push('/start-screen');
        } catch(e) {
          alert('Не удалось распарсить JSON');
        }
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };

  render() {
    const { quiz } = this.props;

    return (
      <Container text className="pt10">
        <Header as='h2'>Введите путь до файла JSON чтобы загрузить квиз</Header>
        <Input type="text" label='https://' className="full pb10" onChange={e => this.setState({ fileUrl: e.target.value })} value={this.state.fileUrl} />
        {quiz != null && <Segment>Квиз загружен</Segment>}
        <Button primary onClick={this.loadQuiz}>Загрузить</Button>
      </Container>
    );
  }
}

const QuizLoaderContainer = connect(
  state => {
    return {
      quiz: state.quiz
    }
  },
  dispatch => ({
    onQuizLoaded: payload => dispatch({ type: 'QUIZ_LOADED', payload })
  })
)(QuizLoader);

export default QuizLoaderContainer;
