
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
      backgroundColor: '#384850',
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
        borderRadius: 0,
    },
    recommendationOptionEnabled: {
        backgroundColor: '#000'      
    },
    findTestingCenterButton: {
      backgroundColor: '#000',
      marginTop: 20,
      marginHorizontal: 10,
      marginBottom: 10,
      borderRadius: 50
    }

});
