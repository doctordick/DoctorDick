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
import Modal from 'react-native-modalbox';


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

    openHighRiskExposureModal() {
        this.refs.highRiskExposureModal.open()
    }
    closeHighRiskExposureModal() {
        this.refs.highRiskExposureModal.close()
    }

    nextState(answerIndex) {
        let answer = hiv[this.state.questionIndex].answers[answerIndex]
        if(answer.done) {
            this.reachDecision(answer.done, 'HIV');
            this.setState({ answer: answer.done, done: true, progress: 1 });
        } else if(answer.next === 'hiv-info') {
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

    renderView () {
        if(this.state.goingForward && !this.state.isDisclaimer) {
            this.state.progress += 1/3;
        }

        if(!this.state.done) {
            return this.renderQuestion(this);
        } else {
            setTimeout(() => {
                this.pushNewRoute('recommendationPage');
            }, 0)
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
                <View>
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
                     <Modal navigator={this.props.navigator} style={[styles.modal, styles.highRiskExposureModal]} backdrop={false} ref={'highRiskExposureModal'}  swipeToClose={false} >
                        <Content>
                             <Header style={styles.modalHeader}>
                                <Button transparent onPress={this.closeHighRiskExposureModal.bind(this)}>
                                    <Icon name="ios-arrow-back" style={{fontSize: 30, lineHeight: 32, color: '#000'}} />
                                </Button>

                                <Title style={styles.modalHeaderTitle}>What's High Risk Exposure?</Title>
                            </Header>
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

export default connect(null, bindActions)(Survey);
