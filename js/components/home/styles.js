'use strict';

import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
    },
    buttonBlockLong: {
        flex: 0,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null
    },
    buttonBlock: {
        flex: 0,
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null
    },
    button: {
        marginTop: 10,
        width: 200
    },
    buttonLong:{
        width: 300,
        borderRadius: 0
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        height: null,
        width: null,
    },
    linkText: {
        marginTop: 10,
        textDecorationLine: 'underline',
        fontWeight: '300',
        lineHeight: 18,
        color: '#0000ee'
    },
});
