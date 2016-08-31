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
import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';

class Dashboard extends Component {

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

    render() {
        return (
            <Container theme={theme}>
                <View style={styles.container}>
                    <Title style={{color: '#000', fontSize: 18}}>How can Doctor Dick help you today?</Title>
                    <Title style={{color: '#333', fontStyle: 'italic', paddingTop: 30}}>I want to learn about...</Title>
                    <Button block style={{backgroundColor: '#800080', marginBottom: 20, marginTop: 20, paddingBottom:10, borderRadius: 0 }} onPress={() => this.pushNewRoute('survey')}>
                        <Text>
                            HIV Testing
                        </Text>
                    </Button>
                    <Button block disabled style={{marginBottom: 20, paddingBottom:10, borderRadius: 0 }} onPress={() => this.navigateTo('emergency')}>
                        <Text>
                            STD Testing <Text style={{fontStyle: 'italic'}}>(Coming Soon)</Text>
                        </Text>
                    </Button>
                    <Button block disabled style={{marginBottom: 20, paddingBottom:10, borderRadius: 0 }} onPress={() => this.navigateTo('emergency')}>
                        <Text>
                            PrEp <Text style={{fontStyle: 'italic'}}>(Coming Soon)</Text>
                        </Text>
                    </Button>
                    <Button block disabled style={{marginBottom: 20, paddingBottom:10, borderRadius: 0 }} onPress={() => this.navigateTo('emergency')}>
                        <Text>
                            Sexual Health Related Vaccines <Text style={{fontStyle: 'italic'}}>(Coming Soon)</Text>
                        </Text>
                    </Button>
                </View>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='dashboard'/>
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

export default connect(null, bindActions)(Dashboard);
