import React, { Component } from 'react'

import {
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native'

import Question from './Question'
// import questionCollection from './_questionCollection'

export default class Questionnaire extends Component {

    constructor(props){
        super(props);
        this.state = {
          header: questionCollection[0].header,
          question: questionCollection[0].questions[0],
          questionIndex: 0,
          collectionIndex: 0
        };
    }

    switchQuestion() {
      // increment number until the end of first array
      // then switch to the second array
      this.state.questionIndex++;

      let questionIndex = this.state.questionIndex;
      let collectionIndex = this.state.collectionIndex;

      if(collectionIndex === 0 && questionIndex >= 7) {
        collectionIndex = 1;
        questionIndex = 0;
      }

      if(collectionIndex === 1 && questionIndex >= 5){
        // This route change isn't working
        this.props.nextRoute({
            id: "Loading"
        });
      }
      this.setState({
        question: questionCollection[collectionIndex].questions[questionIndex],
        header: questionCollection[collectionIndex].header,
        questionIndex: questionIndex,
        collectionIndex: collectionIndex
      });
    }

    render() {
      return (
          <Navigator renderScene={this.navigatorRenderScene.bind(this)} />
      );
    }

    navigatorRenderScene(route, navigator){
      return (
        <Question header={this.state.header}
                  question={this.state.question}
                  nextQuestion={this.switchQuestion.bind(this)}
                  navigator={this.props.navigator} />
      );
    }
}
