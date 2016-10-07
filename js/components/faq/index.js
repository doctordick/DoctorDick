'use strict';

import React, { Component } from 'react';
import { TouchableHighlight, Image, Platform, Linking } from 'react-native';
import { connect } from 'react-redux';
import { pushNewRoute, replaceRoute, popRoute } from '../../actions/route';
import { Container,
         Content,
         Text,
         Header,
         Title,
         Footer,
         Button,
         List,
         ListItem,
         Icon,
         View } from 'native-base';
import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import faqs from './constant';
import styles from './styles';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

class FAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swipeToClose: true,
            selected: false
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

    linkHandler (link) {
        return <Text style={styles.link} onPress={() => Linking.openURL(link.url)}>{ link.label }</Text>
    }

    renderAnswer (section) {
        if(section.link) {
            let sectionParts = section.answer.split(section.link.label);
            let link = this.linkHandler(section.link);
            return (
                <Animatable.Text style={[styles.faqText, styles.faqAnswer]}>
                    {sectionParts[0]}
                    {this.linkHandler(section.link)}
                    {sectionParts[1]}
                </Animatable.Text>
            )
        } else {
            return <Animatable.Text style={[styles.faqText, styles.faqAnswer]}>{section.answer}</Animatable.Text>
        }
    }

    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={300} style={[styles.faq, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                    <Text style={[styles.faqText, styles.faqQuestion, isActive ? styles.selected : styles.notSelected]}>{section.question}</Text>
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        let answer = this.renderAnswer(section);
        return (
            <Animatable.View duration={300} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                {answer}
            </Animatable.View>
        );
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={styles.header} >
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={styles.backButton} />
                    </Button>
                    <Title>FAQ</Title>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Text style={styles.sectionHeading}>{faqs.about.title}</Text>
                        <Accordion
                            linkHandler={this.linkHandler}
                            renderAnswer={this.renderAnswer}
                            underlayColor={'#f5f5f5'}
                            duration={300}
                            sections={faqs.about.questionCollection}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </View>
                    <View style={[styles.containerBottom]}>
                        <Text style={styles.sectionHeading}>{faqs.aboutSexualHealth.title}</Text>
                        <Accordion
                            linkHandler={this.linkHandler}
                            renderAnswer={this.renderAnswer}
                            underlayColor={'#f5f5f5'}
                            duration={300}
                            sections={faqs.aboutSexualHealth.questionCollection}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </View>
                </Content>
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

export default connect(null, bindActions)(FAQ);
