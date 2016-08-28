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
import theme from '../../themes/base-theme';
import { Image, Platform, Alert } from 'react-native';
import { pushNewRoute, replaceRoute, popRoute } from '../../actions/route';
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
                <Text style={{color: 'black', fontSize: 18, marginBottom: 10}}>{this.props.question}</Text>
                    {this.props.answers.map( (elem, index) => {
                        return (
                            <Button block key={index} style={{backgroundColor: '#800080', marginBottom: 20, borderRadius: 0 }} onPress={this.props.next.bind(this, index)}>
                                <Text style={{color: 'white'}}>
                                {elem.text}
                                </Text>
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