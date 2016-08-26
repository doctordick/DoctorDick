'use strict';

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class Mail extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                        <Title>Mail</Title>
                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}}>
                        <Card transparent style={styles.card}>
                            <CardItem header style={styles.cardHeader}>
                                <Thumbnail source={require('../../../images/contacts/sanket.png')} />
                                <Text>Kumar Sanket</Text>
                                <Text note style={styles.note}>StrapMobile</Text>
                                <Text style={styles.date}>18 May, 5:15 PM</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem}>
                                <Text style={{marginBottom: 15}}>
                                    Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League. Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League. Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League. Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League.
                                </Text>
                                <Text>Thanks,</Text>
                                <Text>Kumar Sanket</Text>
                                <Text>Sahusoft India Pvt. Ltd.</Text>
                            </CardItem>
                        </Card>

                        <View style={{paddingTop: 10}} >
                            <Text >Attachments</Text>
                            <View style={styles.attachment}>
                                <Icon name='ios-images' style={{fontSize: 27}} />
                                <Text style={{marginLeft: 5}}>invitation.jpg</Text>
                            </View>
                            <View style={styles.attachment}>
                                <Icon name='ios-images' style={{fontSize: 27}} />
                                <Text style={{marginLeft: 5}}>profile.jpg</Text>
                            </View>
                            <View style={styles.attachment}>
                                <Icon name='ios-images' style={{fontSize: 27}} />
                                <Text style={{marginLeft: 5}}>mail.jpg</Text>
                            </View>
                            <View style={styles.attachment}>
                                <Icon name='ios-images' style={{fontSize: 27}} />
                                <Text style={{marginLeft: 5}}>inbox.jpg</Text>
                            </View>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Mail);
