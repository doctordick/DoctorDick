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
                    <Text style={[styles.faqText, styles.faqQuestion, isActive ? styles.selected : styles.notSelected]}>{section.question}</Text>
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
                <Header style={styles.header} >
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={styles.backButton} />
                    </Button>
                    <Title>FAQ</Title>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Text style={{alignSelf: 'flex-start', marginLeft: 20, fontSize: 26, lineHeight: 40, fontWeight: '500', marginTop: 20, marginBottom: 20}}>{faqs.about.title}</Text>
                        <Accordion
                            sections={faqs.about.questionCollection}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </View>
                    <View style={[styles.containerBottom]}>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 20, fontSize: 20, fontWeight: '500', marginTop: 20, marginBottom: 20}}>{faqs.aboutSexualHealth.title}</Text>
                        <Accordion
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
