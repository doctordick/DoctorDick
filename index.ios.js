import React, { Component } from 'react'

import {
  AppRegistry,
  Navigator
} from 'react-native'

import Main from "./app/components/Main"
import Setup from "./app/components/Setup"
import Questionnaire from "./app/components/Questionnaire"
import Menu from "./app/components/Menu"
import Loading from "./app/components/Loading"
import Recommendations from "./app/components/Recommendations"
import Map from "./app/components/Map"

class doctordick extends Component {

  nextRoute(route) {
    if(this.props){
      this.props.navigator.push(route);
    } else {
      this.navigator.push(route);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'Main', title: 'Main'}}
        renderScene={this.renderScene.bind(this)} />
    );
  }

  renderScene(route, navigator){
    var routeId = route.id;

    if(routeId === 'Main'){
      return(
        <Main
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Setup'){
      return(
        <Setup
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Menu'){
      return(
        <Menu
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Questionnaire'){
      return(
        <Questionnaire
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Loading'){
      return(
        <Loading
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Recommendations'){
      return(
        <Recommendations
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Map'){
      return(
        <Map
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }
  }
}

AppRegistry.registerComponent('doctordick', () => doctordick);
