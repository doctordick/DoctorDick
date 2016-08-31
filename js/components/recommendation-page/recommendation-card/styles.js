
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
      paddingHorizontal: 10,
      marginVertical: 10,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.6,
      shadowRadius: 2,
    },
    title: {
      color: 'black',
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    reminderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    reminderLabel: {
      color: 'black',
      marginLeft: 70,
      marginRight: 20,
    },
    reminderSwitch: {
      flex: 1,
    },
});
