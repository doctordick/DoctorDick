'use strict';

import React, { Component } from 'react';
import { TouchableHighlight, Image, Platform } from 'react-native';
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
    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={50} style={[styles.faq, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                    <Text style={[styles.faqText, styles.faqQuestion]}>{section.question}</Text>
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
      <Animatable.View duration={50}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text style={[styles.faqText, styles.faqAnswer]} animation={isActive ? 'bounceInDown' : undefined}>{section.answer}</Animatable.Text>
      </Animatable.View>
        );
    }

    render() {
        return (
            <Container theme={theme}>
                <Header style={{ backgroundColor: '#800080'}} >
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title>FAQ</Title>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Accordion
                            sections={faqs}
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
