
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
      marginBottom: 170, 
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
      fontWeight: '300',
      textAlign: 'center',
      lineHeight: 25
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
    setReminderButton: {
      backgroundColor: '#000',
      marginTop: 20,
      marginHorizontal: 10,
      marginBottom: 10,
      borderRadius: 50
    },
});
