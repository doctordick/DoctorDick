'use strict';

import React, { Component } from 'react';
import { Image, Platform, Alert, Linking } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute } from '../../actions/route';
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

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            done: false,
            answer: 'testRec'
        };
    }

    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    previousState() {
        if(this.state.done){
            this.setState({ done: false });
        } else if(this.state.questionIndex === 0) {
            this.popRoute()
        } else {
            this.setState({ questionIndex: hiv[this.state.questionIndex].previous || this.state.questionIndex - 1 });
        }
    }

    openLink(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    nextState(answerIndex) {
        let answer = hiv[this.state.questionIndex].answers[answerIndex]
        if(answer.done) {
            this.setState({ answer: answer.done, done: true });
        } else if(answer.next === 'hiv-info') {
            Linking.openURL('https://www.aids.gov/hiv-aids-basics').catch(err => console.error('An error occurred', err));
        } else if(answer.next === 'emergency') {
            this.pushNewRoute('emergency');
        } else if (answer.next) {
            this.setState({ questionIndex: answer.next });
        }
    }

    previousState() {
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
        if(this.state.done) {
            return this.renderAnswer(this);
        }else {
            return this.renderQuestion(this);
        }
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={{ backgroundColor: '#800080' }}>
                    <Button transparent onPress={this.previousState.bind(this)}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title>HIV Testing</Title>
                </Header>
                <View style={styles.testRec}>
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
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindActions)(Survey);
