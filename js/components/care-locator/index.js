'use strict';

import React, { Component} from 'react';
import { Image, MapView, Linking } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import {Container, Header, Title, Content, Text, Icon, Button, List, ListItem, Spinner, Tabs, View, Footer} from 'native-base';

import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';
import CustomHeader from '../custom-header'

class CareLocator extends Component {

    constructor(props) {
      super(props);
      this.state = {
        testCenters: [],
        lat: null,
        long: null,
      };
    }

    componentWillMount() {
      this.getLocation()
    }

    getLocation() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude
          });
          this.lookupTestingCenters()
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }

    lookupTestingCenters() {
      fetch('https://locator.aids.gov/data?lat=' + this.state.lat + '&long=' + this.state.long + '&services=testing')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({testCenters: responseJson.services[0].providers});
        })
        .catch((error) => {
            console.error(error);
        });
    }


    popRoute() {
        this.props.popRoute();
    }


    render() {
        return (
            <Container theme={theme} style={styles.container}>

                <Content style={{backgroundColor: 'transparent'}}>
                    <CustomHeader title={"HIV TESTING SITES"} showBackButton={true} />
                  { this.state.testCenters.length === 0 ?
                    <Spinner /> :

                    <Tabs>
                        <View tabLabel='Map'>
                            <MapView
                                style={{height:558, width: 380}}
                                showsUserLocation
                                region={{
                                    latitude: this.state.lat,
                                    longitude: this.state.long,
                                    latitudeDelta: .2,
                                    longitudeDelta: .2 }}
                                annotations={(() => this.state.testCenters.map(center => ({
                                    latitude: Number(center.point.lat),
                                    longitude: Number(center.point.long),
                                    title: center.title,
                                    subtitle: center.telephone,
                                    animateDrop: true,
                                    leftCalloutView: <Icon name='ios-navigate-outline' style={{color:'black'}} onPress={() => Linking.openURL(
                                        'http://maps.apple.com/?q='+ center.title+', '+center.streetAddress+', '+center.postalCode
                                    )} />,
                                    rightCalloutView: <Icon name='ios-information-outline' style={{color: 'black', fontSize: 40}} onPress={() => Linking.openURL(center.link)} />
                                })))()}
                            />
                        </View>
                        <List  tabLabel="List">
                            {this.state.testCenters.map((center, index) => (
                              <ListItem key={index} style={{ width: 380, paddingLeft: 30, backgroundColor: 'white'}}>
                                <Text>
                                  <Text style={{ color: '#696969',  fontWeight: '500', fontSize: 16 }}>{center.title + '\n'}</Text>
                                  <Text style={{ color: '#696969', fontWeight: '300' }} onPress={() => Linking.openURL(
                                        'http://maps.apple.com/?q='+ center.title+', '+center.streetAddress+', '+center.postalCode
                                    )}>{[
                                      center.telephone,
                                      center.streetAddress,
                                      `${center.locality}, ${center.region} ${center.postalCode}`
                                    ].join('\n')
                                    }</Text>
                                    <Text style={{ color: '#0000EE', fontSize: 13, textAlign: 'right', textDecorationLine: 'underline'}} onPress={() => Linking.openURL(center.link)}>
                                        {'\n'}More Info
                                    </Text>
                                </Text>
                              </ListItem>
                            ))}
                        </List>
                    </Tabs>
                  }
                </Content>
                <Footer>
                    <FooterComponent navigator={this.props.navigator} currentPage='careLocator'/>
                </Footer>
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

export default connect(null, bindAction)(CareLocator);
