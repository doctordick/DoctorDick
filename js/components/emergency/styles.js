'use strict';

import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    question: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        alignItems: 'center'
    },
    questionText: {
        color: '#696969',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 25,
        fontWeight: '300'
    },
    header: { 
        backgroundColor: '#fff',
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
    },
    buttonBlock: {
        backgroundColor: '#000',
        marginBottom: 20,
        marginTop: 40,
        paddingBottom:10,
        borderRadius: 0 
    }
});
