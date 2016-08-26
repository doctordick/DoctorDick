'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon, Footer} from 'native-base';
import FooterComponent from './../footer';

import theme from '../../themes/base-theme';
import styles from './styles';

var CalendarPicker = require('react-native-calendar-picker'), CalendarPicker2;

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state= {
            date: new Date(),
        };
    }

    onDateChange (date) {
        this.setState({ date: date });
    }

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>

                        <Title>Calendar</Title>

                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}} >
                        <CalendarPicker
                        selectedDate={this.state.date}
                        onDateChange={this.onDateChange.bind(this)}
                        textStyle={{color: '#fff'}}
                        selectedDayColor='#00c497'/>

                        <Text style={{marginTop: 5, alignSelf: 'center'}} >
                            Date:  { this.state.date.toString().substr(4,12) }
                        </Text>
                    </Content>

                    <Footer>
                        <FooterComponent />
                    </Footer>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Calendar);
