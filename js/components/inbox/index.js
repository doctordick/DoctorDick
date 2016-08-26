'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './style';

class Inbox extends Component {

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

                        <Title>Inbox</Title>

                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Content style={{backgroundColor: 'transparent'}}>
                        <Card transparent foregroundColor='#fff' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/sanket.png')} />
                                <Text>Kumar Sanket</Text>
                                <Text note>StrapMobile</Text>
                                <Text style={styles.date}>Monday 05, 11 AM</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card transparent foregroundColor='#fff' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/pratik.png')} />
                                <Text>Kumar Pratik</Text>
                                <Text note>StrapUI</Text>
                                <Text style={styles.date}>Monday 05, 11 AM</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card transparent foregroundColor='#fff' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/pratik.png')} />
                                <Text>Kumar Pratik</Text>
                                <Text note>StrapUI</Text>
                                <Text style={styles.date}>Monday 05, 11 AM</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card transparent foregroundColor='#fff' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/pratik.png')} />
                                <Text>Kumar Pratik</Text>
                                <Text note>StrapUI</Text>
                                <Text style={styles.date}>Monday 05, 11 AM</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card transparent foregroundColor='#fff' style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/pratik.png')} />
                                <Text>Kumar Pratik</Text>
                                <Text note>StrapUI</Text>
                                <Text style={styles.date}>Monday 05, 11 AM</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Before Monday night’s fixture against Newcastle, Leicester are top of the Premier League.
                                </Text>
                            </CardItem>
                        </Card>
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

export default connect(null, bindAction)(Inbox);
