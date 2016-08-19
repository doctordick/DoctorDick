import React, { Component } from 'react'

import {
  AppRegistry,
  Navigator
} from 'react-native'

import LoginSignup from './app/components/setup/LoginSignup'
import Setup from './app/components/setup/Setup'
import Questionnaire from './app/components/questionnaire/Questionnaire'
import Splash from './app/components/shared/Splash'
import routes from './routes'

class doctordick extends Component {

  onForward(route) {
    this.props ? this.props.navigator.push(route) : this.navigator.push(route);
  }

  onBack() {
    this.props.navigator.pop();
  }

  navigatorRenderScene(route, navigator){
    switch (route.id) {
      case 'auth':
        return(
          <LoginSignup
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
      case 'setup':
        return(
          <Setup
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
      case 'faq':
        return(
          <Faq
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
      case 'questionnaire':
        return(
          <Questionnaire
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
      case 'reminders':
        return(
          <Reminders
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
      case 'store':
        return(
          <Store
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
      case 'careLocator':
        return(
          <CareLocator
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
      case 'more':
        return(
          <More
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;   
      case 'dashboard': 
      default:
        return(
          <Dashboard
            title={route.title}
            navigator={navigator}
            onForward={this.onForward}
            onBack={this.onBack} />
        );
        break;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={routes[1]}
        initialRouteStack={routes}
        renderScene={this.navigatorRenderScene.bind(this)} />
    );
  }
}

AppRegistry.registerComponent('doctordick', () => doctordick);
