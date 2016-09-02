'use strict';

import React, { Component } from 'react';
import { Container,
         Content,
         Text,
         Header,
         Title,
         InputGroup,
         Input,
         Button,
         Icon,
         View } from 'native-base';
import CONSTANTS from './constants';
import styles from './styles';

class Privacy extends Component {
  render() {
    return (
      <View style={styles.legalView}>
        <Content>
          <Text>{"\n\n"}</Text>
          {Object.keys(CONSTANTS.legals)
            .map(key => (
                <View key={key} style={styles.legalItemView}>
                    <Text style={styles.legalTitle}>{key}</Text>
                    <Text style={styles.legalAnswer}>{CONSTANTS.legals[key]}</Text>
                </View>
            ))
          }
        </Content>
      </View>
    )
  }
}


export default Privacy;
