
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
      padding: 10,
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: 18,
      color: 'white',
    },
    saveButton: {
      backgroundColor: 'green',
      borderRadius: 0,

      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
});
