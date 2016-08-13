import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Navigator,
  MapView
} from 'react-native'

import Header from './Header'
import appColors from './_appColors'

var markers = [
  {
    latitude: 37.782286,
    longitude: -122.3973877,
    title: 'HIV & STD testing center',
    subtitle: '1234 Jameston Drive'
  },
  {
    latitude: 37.782701,
    longitude: -122.3955693,
    title: 'Planned Parenthood & Testing Center',
    subtitle: '9877 Riveria Ave'
  },
  {
    latitude: 37.785084,
    longitude: -122.3973073,
    title: 'Planned Parenthood & Testing Center',
    subtitle: '9877 Riveria Ave'
  },
  {
    latitude: 37.7868985,
    longitude: -122.3995765,
    title: 'Planned Parenthood & Testing Center',
    subtitle: '9877 Riveria Ave'
  }
];

class Map extends Component {

  render() {
    return (
        <Navigator renderScene={this.renderScene.bind(this)} />
      );
  }

  renderScene(route, navigator){
    return (
      <View style={styles.container}>
        <Header value="Map" navigator={this.props.navigator}/>
        <MapView
          showsUserLocation={true}
          showsPointsOfInterest={false}
          annotations={markers}
          style={styles.mapContainer}
          region={{
            latitude: 37.782286,
            longitude: -122.3973877,
            latitudeDelta: .01,
            longitudeDelta: .01 }}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    backgroundColor: appColors.backgroundColorPrimary,
    flex: 1
  },

  mapContainer: {
    flex: 11,
    flexDirection: 'row'
  }

});

export default Map
