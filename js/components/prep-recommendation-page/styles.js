
'use strict';

import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor:'#FFF'
    },
    mb25: {
      marginBottom: 25
    },

    modal: {
      alignItems: 'center'
    },

    saveButton: {
      alignSelf: 'stretch',
    },

    header: {
      backgroundColor: '#fff',
      borderBottomColor: '#000',
      borderBottomWidth: 0.5
    },
    backButton: {
      fontSize: 30,
      lineHeight: 32,
      color: '#000'
    },
    recommendationOption: {
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 0
    },
    recommendationOptionEnabled: {
        backgroundColor: '#000'
    },
    findTestingCenterButton: {
      backgroundColor: '#517aa3',
      marginTop: 20,
      marginHorizontal: 10,
      marginBottom: 10,
      borderRadius: 50,
      shadowOpacity: 0,
      borderColor: '#517aa3',
      borderWidth: 0.5,
      width: 250,
      alignSelf: 'center'
    },
    card: {
      backgroundColor: '#EEE',
      borderRadius: 0,
      borderColor: '#EEE',
      shadowColor: '#000',
      shadowOffset: {
        width: 0, height: 3
      },
      shadowOpacity: 0.6,
      shadowRadius: 2,
      height: 250,
    },
    cardRetake: {
      backgroundColor: '#EEE',
      borderRadius: 0,
      borderColor: '#EEE',
      shadowColor: '#000',
      shadowOffset: {
        width: 0, height: 3
      },
      shadowOpacity: 0.6,
      shadowRadius: 2,
      height: 100,
      marginTop: 350
    }

});
