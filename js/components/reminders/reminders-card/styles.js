
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
      backgroundColor: '#FFF',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 0,
      borderWidth: 0.5,
    },
    title: {
      color: 'black',
      fontSize: 15,
      fontWeight: '300',
      textAlign: 'justify',
      lineHeight: 25,
      color: '#696969',
    },
    reminderContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    reminderLabel: {
      marginLeft: 10,
      color: '#696969',
      width: 180,
    },
    reminderSwitch: {
      marginRight: 10
    },
    cardHeader: {
      backgroundColor: '#517aa3',
      padding: 10,
      paddingTop: 15,
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
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
