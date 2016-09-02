'use strict';

import React, { Component } from 'react';
import { Image, Platform, Alert, Linking } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute } from '../../actions/route';
import { reachDecision } from '../../actions/recommendations';
import { Container,
         Content,
         Text,
         Header,
         Title,
         Footer,
         Button,
         Icon,
         View } from 'native-base';
import theme from '../../themes/base-theme';
import FooterComponent from './../footer';
import Question from './question';
import { TestRec, ReferCare, FollowupRec, ContactDoc } from './results';
import hiv from './constants';
import styles from './styles';
import * as Progress from 'react-native-progress';


class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            done: false,
            answer: 'testRec',
            isDisclaimer: true,
            progress: 0,
            goingForward: true
        };
    }

    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    nextState(answerIndex) {
        let answer = hiv[this.state.questionIndex].answers[answerIndex]
        if(answer.done) {
            this.reachDecision(answer.done, 'HIV');
            this.setState({ answer: answer.done, done: true, progress: 1 });
        } else if(answer.next === 'hiv-info') {
            Linking.openURL('https://www.aids.gov/hiv-aids-basics').catch(err => console.error('An error occurred', err));
        } else if(answer.next === 'emergency') {
            this.pushNewRoute('emergency');
        } else if (answer.next) {
            this.setState({
                questionIndex: answer.next,
                isDisclaimer: false,
                goingForward: true
            });
        }
    }

    previousState() {
        this.setState({
            progress: this.state.progress - 1/3,
            goingForward: false
        });
        if(this.state.progress === 0) {
            this.setState({
                isDisclaimer: true
            });
        }
        if(this.state.done){
            this.setState({ done: false });
        } else if(this.state.questionIndex === 0) {
            this.popRoute()
        } else {
            this.setState({ questionIndex: hiv[this.state.questionIndex].previous || this.state.questionIndex - 1 });
        }
    }

    popRoute() {
        this.props.popRoute();
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    reachDecision(decision, questionnaireType) {
         this.props.reachDecision(decision, questionnaireType);
    }

    renderQuestion(context) {
        return (<Question
                    question={hiv[context.state.questionIndex].question}
                    answers={hiv[context.state.questionIndex].answers}
                    next={context.nextState.bind(context)}
                />)
    }

    renderAnswer(context) {
        switch(context.state.answer) {
            case 'referCare':
                return (<ReferCare
                            pushNewRoute={this.pushNewRoute.bind(this)}
                            openLink={this.openLink.bind(this)}
                        ></ReferCare>);
                break;
            case 'followupRec':
                return (<FollowupRec
                            pushNewRoute={this.pushNewRoute.bind(this)}
                            openLink={this.openLink.bind(this)}
                         ></FollowupRec>)
            case 'contactDoc':
                return (<ContactDoc
                            pushNewRoute={this.pushNewRoute.bind(this)}
                            openLink={this.openLink.bind(this)}
                         ></ContactDoc>)
            case 'testRec':
            default:
                return (<TestRec
                            pushNewRoute={this.pushNewRoute.bind(this)}
                            openLink={this.openLink.bind(this)}
                         ></TestRec>)
        }
    }

    renderView () {
        if(this.state.goingForward && !this.state.isDisclaimer) {
            this.state.progress += 1/3;
        }

        if(this.state.done) {
            return this.renderAnswer(this);
        } else {
            return this.renderQuestion(this);
        }
    }

    renderProgressBar() {
        if(!this.state.isDisclaimer) {
            return (
                <Progress.Bar
                    borderRadius={0}
                    color={'#000'}
                    unfilledColor= {'#FFFFFF'}
                    style={{ marginTop: 40 }}
                    progress={this.state.progress}
                    width={300} />
            )
        }
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={styles.header}>
                    <Button transparent onPress={this.previousState.bind(this)}>
                        <Icon name='ios-arrow-back' style={styles.backButton} />
                    </Button>
                    <Title>HIV Testing</Title>
                </Header>
                <View style={styles.testRec}>
                    { this.renderProgressBar() }
                    { this.renderView() }
                </View>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} />
                </Footer>
            </Container>
        )
    }
}



function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
        popRoute: () => dispatch(popRoute()),
        reachDecision:(decision, questionnaireType)=>dispatch(reachDecision(decision, questionnaireType)),
    }
}

export default connect(null, bindActions)(Survey);
