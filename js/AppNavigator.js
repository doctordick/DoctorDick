'use strict';

import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash/core';

import { closeDrawer } from './actions/drawer';
import { popRoute } from './actions/route';

import { Drawer } from 'native-base';
import Navigator from 'Navigator';
import Login from './components/login';
import SideBar from './components/sideBar';
import RecommendationPage from './components/recommendation-page';
import CareLocator from './components/care-locator';
import Disclaimer from './components/disclaimer';
import FAQ from './components/faq';
import Survey from './components/survey';
import Feedback from './components/feedback';
import Home from './components/home';
import RemindersPage from './components/reminders';
import FindServices from './components/find-services';
import ViewRecs from './components/view-recs';
import PrepLocator from './components/prep-locator';
import PrepRecommendationPage from './components/prep-recommendation-page';
import PrepSurvey from './components/prep-survey';

import { statusBarColor } from './themes/base-theme';

Navigator.prototype.replaceWithAnimation = function (route) {
    const activeLength = this.state.presentedIndex + 1;
    const activeStack = this.state.routeStack.slice(0, activeLength);
    const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
    const nextStack = activeStack.concat([route]);
    const destIndex = nextStack.length - 1;
    const nextSceneConfig = this.props.configureScene(route, nextStack);
    const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

    const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
    this._emitWillFocus(nextStack[destIndex]);
    this.setState({
        routeStack: nextStack,
        sceneConfigStack: nextAnimationConfigStack,
    }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
            this.immediatelyResetRouteStack(replacedStack);
        });
    });
};

export var globalNav = {};

const searchResultRegexp = /^search\/(.*)$/;

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        var currentState = state;

        if(currentState){
            while (currentState.children){
                currentState = currentState.children[currentState.index]
            }
        }
        return defaultReducer(state, action);
    }
};

class AppNavigator extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        globalNav.navigator = this._navigator;

        this.props.store.subscribe(() => {
            if(this.props.store.getState().drawer.drawerState == 'opened')
                this.openDrawer();

            if(this.props.store.getState().drawer.drawerState == 'closed')
                this._drawer.close();
        });

        BackAndroid.addEventListener('hardwareBackPress', () => {
            var routes = this._navigator.getCurrentRoutes();

            if(routes[routes.length - 1].id == 'home' || routes[routes.length - 1].id == 'login') {
                return false;
            }
            else {
                this.popRoute();
                return true;
            }
        });
    }

    popRoute() {
        this.props.popRoute();
    }

    openDrawer() {
        this._drawer.open();
    }

    closeDrawer() {
        if(this.props.store.getState().drawer.drawerState == 'opened') {
            this._drawer.close();
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type='overlay'
                content={<SideBar navigator={this._navigator} />}
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.1}
                panCloseMask={0.2}
                negotiatePan={true}>
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle="light-content"
                />
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={(route) => {
                        return {
                            ...Navigator.SceneConfigs.FloatFromRight,
                            gestures: {}
                        };
                    }}
                    initialRoute={{id: 'login', statusBarHidden: true}}
                    renderScene={this.renderScene}
                  />
            </Drawer>
        );
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'login':
                return <Login navigator={navigator} />;
            case 'home':
                return <Home navigator={navigator} />;
            case 'remindersPage':
                return <RemindersPage navigator={navigator} />;
            case 'recommendationPage':
                return <RecommendationPage navigator={navigator} />;
            case 'prepRecommendationPage':
                return <PrepRecommendationPage navigator={navigator} />;
            case 'careLocator':
                return <CareLocator navigator={navigator} />;
            case 'disclaimer':
                return <Disclaimer navigator={navigator} />;
            case 'faq':
                return <FAQ navigator={navigator} />;
            case 'survey':
                return <Survey navigator={navigator} />;
            case 'feedback':
                return <Feedback navigator={navigator} />;
            case 'findServices':
                return <FindServices navigator={navigator} />;
            case 'viewRecs':
                return <ViewRecs navigator={navigator} />;
            case 'prepLocator':
                return <PrepLocator navigator={navigator} />;
            case 'prepSurvey':
                return <PrepSurvey navigator={navigator} />;
            default:
                return <RecommendationPage navigator={navigator} />;
        }
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

const mapStateToProps = (state) => {
    return {
        drawerState: state.drawer.drawerState
    }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);
