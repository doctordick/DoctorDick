
'use strict';

import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    mb25: {
    	marginBottom: 25
    },
    card: {
      backgroundColor: '#EEE',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0, height: 3
      },
      shadowOpacity: 0.6,
      shadowRadius: 2,
    },
    title: {
      color: 'black',
      fontSize: 17,
      textAlign: 'justify',
      lineHeight: 25,
    },
    reminderContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 5,
    },
    reminderLabel: {
      marginLeft: 10,
      color: 'black',
      width: 150,
    },
    reminderSwitch: {
      marginRight: 10
    },
    cardHeader: {
      backgroundColor: 'black',
      padding: 20,
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: 18,
    },
    saveButton: {
      backgroundColor: 'green',
      borderRadius: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0, height: 3
      },
      shadowOpacity: 0.6,
      shadowRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
});
