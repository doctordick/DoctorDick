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
                <Header style={styles.header}>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{color: '#000', fontSize: 30, lineHeight: 32}} />
                    </Button>
                    <Title style={{color: '#000'}}>HIV Testing Sites</Title>
                </Header>

                <Content style={{backgroundColor: 'transparent'}}>
                  { this.state.testCenters.length === 0 ?
                    <Spinner /> :

                    <Tabs>
                        <List tabBgColor={{backgroundColor:'#000'}} tabLabel="List">
                            {this.state.testCenters.map((center, index) => (
                              <ListItem iconLeft key={index} style={{width:360}}>
                                  <Icon name='ios-medkit'/>
                                  <Text onPress={() => Linking.openURL(
                                        'http://maps.apple.com/?q='+ center.title+', '+center.streetAddress+', '+center.postalCode
                                    )}>{[
                                      center.title,
                                      center.telephone,
                                      '',
                                      center.streetAddress,
                                      `${center.locality}, ${center.region} ${center.postalCode}`
                                    ].join('\n')
                                    }</Text>
                                    <Text onPress={() => Linking.openURL(center.link)}>
                                        More Info
                                    </Text>
                              </ListItem>
                            ))}
                        </List>
                        <View tabBgColor={{backgroundColor:'#000'}} tabLabel='Map'>
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
                                    )} />
                                })))()}
                            />
                        </View>
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
