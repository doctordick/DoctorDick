'use strict';

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
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
import hivTestingSurvey from './constant.js'

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swipeToClose: true,
            selected: false,
            showSplash: true,
            showQuestions: false
        };
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

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                showSplash: false,
                showQuestions: true
            })
        }, 1500)
    }

    generateResponseOptions() {
        let context = this
        // return hivTestingSurvey[0].options.map((option, index) => {
        //     return (
        //         <Button block style={{ marginTop: 20, marginLeft: 20, marginRight: 20, backgroundColor: '#800080' }} key={index}>
        //             <Text style={{ color: '#FFFFFF'}}>
        //             { option }
        //             </Text>
        //         </Button>
        //     );
        // });
    }

    render() {
        let splashMessage = this.state.showSplash ? 'Doctor Dick has a few questions for you...' : ''
        let question = this.state.showQuestions ? hivTestingSurvey[0].question : ''
        return (
            <Container theme={theme} style={{backgroundColor: '#d8bfd8'}}>
                <Header style={{ backgroundColor: '#800080' }}>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title>HIV Testing</Title>
                </Header>
                <Content>
                    <Text style={{color: '#000000'}}>
                        { splashMessage }
                    </Text>
                    <Text style={{color: '#000000'}}>
                        { question }
                    </Text>
                </Content>
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
