import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import Modal from 'react-native-modalbox';
import styles from './styles';

export default class BasicModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swipeToClose: true
        }
    }
    openModal() {
        this.refs.modal1.open()
    }
    closeModal() {
        this.refs.modal1.close()
    }
    render() {
        return(
            <Container>
                <Content>
                    <Modal
                        style={[styles.modal, styles.modal1]}
                        backdrop={false} 
                        ref={'modal1'} 
                        swipeToClose={this.state.swipeToClose} >
                            <View style={styles.space}>
                                <Text style={{alignText: 'center'}}>
                                    Basic modal
                                </Text>
                                <Button rounded onPress={this.closeModal.bind(this)} >
                                    Close Modal
                                </Button>
                            </View>
                       </Modal>
                </Content>
            </Container>
        );
    }
}