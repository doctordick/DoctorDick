import React, { Component } from 'react'

import {
  AppRegistry,
  Navigator
} from 'react-native'

import LoginSignup from "./app/components/setup/LoginSignup"
import Setup from "./app/components/setup/Setup"
import Questionnaire from "./app/components/questionnaire/Questionnaire"
import Splash from "./app/components/shared/Splash"

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
        initialRoute={{id: 'LoginSignup', title: 'Login/Signup'}}
        renderScene={this.renderScene.bind(this)} />
    );
  }

  renderScene(route, navigator){
    var routeId = route.id;

    if(routeId === 'LoginSignup'){
      return(
        <LoginSignup
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

    if(routeId === 'Questionnaire'){
      return(
        <Questionnaire
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Splash'){
      return(
        <Loading
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }
  }
}

AppRegistry.registerComponent('doctordick', () => doctordick);
