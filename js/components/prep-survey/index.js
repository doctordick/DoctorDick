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
import prep from './prepConstants';
import styles from './styles';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modalbox';
import CustomHeader from '../custom-header'


class PrepSurvey extends Component {

    constructor(props) {
        super(props);
        let routeStack = this.props.navigator.state.routeStack;
        this.state = {
            questionIndex: routeStack[routeStack.length - 1].question || 0,
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

    openHighRiskExposureModal() {
        this.refs.highRiskExposureModal.open()
    }
    closeHighRiskExposureModal() {
        this.refs.highRiskExposureModal.close()
    }

    nextState(answerIndex) {
        let answer = prep[this.state.questionIndex].answers[answerIndex]
        if(answer.done) {
            this.reachDecision(answer.done, 'PrEP');
            this.setState({ answer: answer.done, done: true, progress: 1 });
        } else if(answer.next === 'prep-info') {
            this.openHighRiskExposureModal();
        } else if(answer.next === 'disclaimer') {
            this.pushNewRoute('disclaimer');
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
        } else if(this.state.questionIndex === 0 || this.state.HIVpositive) {
            this.popRoute()
        } else {
            this.setState({ questionIndex: prep[this.state.questionIndex].previous || this.state.questionIndex - 1 });
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
                    question={prep[context.state.questionIndex].question}
                    answers={prep[context.state.questionIndex].answers}
                    next={context.nextState.bind(context)}
                />)
    }

    renderView () {
        if(this.state.goingForward && !this.state.isDisclaimer) {
            this.state.progress += 1/6;
        }

        if(!this.state.done) {
            return this.renderQuestion(this);
        } else {
            setTimeout(() => {
                this.pushNewRoute('prepRecommendationPage');
            }, 0)
        }
    }

    renderProgressBar() {
        if(!this.state.isDisclaimer) {
            return (
                <Progress.Bar
                    borderRadius={0}
                    borderWidth={0.5}
                    color={'#517aa3'}
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
                <View>
                    <CustomHeader title={"PrEP"} showBackButton={true} />
                    <View style={styles.testRec}>
                        { this.renderProgressBar() }
                        { this.renderView() }
                    </View>
                    <Footer>
                        <FooterComponent navigator={this.props.navigator} />
                    </Footer>
                     <Modal navigator={this.props.navigator} style={[styles.modal, styles.highRiskExposureModal]} backdrop={false} ref={'highRiskExposureModal'}  swipeToClose={false} >
                        <Content>
                            <CustomHeader title={"What's High Risk Exposure?"} showBackButton={true}/>
                            <Text style={[styles.highRiskExposureModalText, styles.modalTextMargin]}> 
                            If you’re HIV-negative or don’t know your HIV status, and in the last 72 hours you 
                            </Text>
                            <Text style={styles.highRiskExposureModalText}>
                            (1) think you may have been exposed to HIV during sex (for example, if the condom broke), 
                            </Text>
                            <Text style={styles.highRiskExposureModalText}>
                            (2) shared needles and works to prepare drugs (for example, cotton, cookers, water), or
                            </Text>
                            <Text style={styles.highRiskExposureModalText}>
                            (3) were sexually assaulted, 
                            </Text>
                            <Text style={styles.highRiskExposureModalText}>
                            talk to your health care provider or an emergency room doctor <Text style={styles.link} onPress={() => this.openLink('http://www.cdc.gov/hiv/basics/pep.html')}>about PEP</Text> right away.
                            </Text>
                        </Content>
                    </Modal>
                </View>
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

export default connect(null, bindActions)(PrepSurvey);
