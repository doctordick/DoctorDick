import React, { Component } from 'react';
import { Container,
         Content,
         Text,
         Header,
         Title,
         Footer,
         Button,
         Icon,
         View } from 'native-base';
import { connect } from 'react-redux';
import theme from '../../../themes/base-theme';
import { Image, Platform, Alert } from 'react-native';
import { pushNewRoute, replaceRoute, popRoute } from '../../../actions/route';
import styles from './styles';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            question: this.props.question || '',
            answers: this.props.answers || ''
        }
    }

    render() {
        return (
            <View style={styles.testRec}>
                <Text style={styles.surveyQuestion}>{this.props.question}</Text>
                    {this.props.answers.map( (elem, index) => {
                        return (
                            <Button block textStyle={{fontWeight: '500', fontSize: 12, color: '#517aa3'}} key={index} style={styles.buttonBlock} onPress={this.props.next.bind(this, index)}>
                                {elem.text}
                            </Button>
                        )
                    })}
            </View>
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

export default connect(null, bindActions)(Question);