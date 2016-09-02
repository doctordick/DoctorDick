'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container, Content, Text} from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

var CalendarPicker = require('react-native-calendar-picker'), CalendarPicker2;

class Calendar extends Component {
    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >

                    <Content padder style={{backgroundColor: 'transparent'}} >
                        <CalendarPicker
                        selectedDate={this.props.date}
                        onDateChange={this.props.setDate}
                        textStyle={{color: '#fff'}}
                        selectedDayColor='#00c497'/>

                        <Text style={{marginBottom: 20, alignSelf: 'center'}} >
                            Date:  { this.props.date.toString().substr(4,12) }
                        </Text>
                    </Content>

                </Image>
            </Container>
        )
    }
}

export default Calendar;
