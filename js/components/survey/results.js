import React, { Component } from 'react';
import { Container,
         Content,
         Text,
         Header,
         Title,
         Footer,
         Button,
         Icon,
         View } from 'native-base';
import theme from '../../themes/base-theme';
import styles from './styles';

export class TestRec extends Component {
    render() {
        return (
            <View style={styles.testRec}>
                <Text style={{color: '#333', fontSize: 16, marginBottom: 20}}>
                    You should get tested for HIV.
                </Text>
                <Button block success style={{ marginBottom: 20, borderRadius: 0, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }} onPress={this.props.pushNewRoute.bind(this, 'care-locator')}>
                    <Icon style={{color: 'white'}} name='ios-pin-outline' />
                    <Text style={{color: 'white'}}>
                        Find a Testing Center
                    </Text>
                </Button>
                <Button block style={{ marginBottom: 20, borderRadius: 0, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }} onPress={this.props.pushNewRoute.bind(this, 'reminders')}>
                    <Icon style={{color: 'white'}} name='ios-alarm-outline' />
                    <Text style={{color: 'white'}}>
                        Set a Reminder
                    </Text>
                </Button>
                <Button block disabled style={{ marginBottom: 20, borderRadius: 0, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }} onPress={this.props.pushNewRoute.bind(this, 'shop')}>
                    <Text style={{color: 'white'}}>
                        Order a HIV Test <Text style={{fontStyle: 'italic'}}>(Coming Soon)</Text>
                    </Text>
                </Button>
                <Button transparent style={{alignSelf: 'center'}} onPress={this.props.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                    <Text style={{color: '#800080'}}>
                        More Information About HIV
                    </Text>
                </Button>
            </View>
        )
    }
}

export class ReferCare extends Component {
    render() {
        return (
            <View style={styles.testRec}>
                <Text style={{color: '#333', fontSize: 16, marginBottom: 20}}>
                    You should talk to a doctor or other healthcare provider about HIV treatment.
                </Text>
                <Button block success style={{ marginBottom: 20, borderRadius: 0, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }} onPress={this.props.pushNewRoute.bind(this, 'care-locator')}>
                    <Icon style={{color: 'white'}} name='ios-pin-outline' />
                    <Text style={{color: 'white'}}>
                        Find a Doctor or Other Healthcare Provider
                    </Text>
                </Button>
                <Button transparent style={{alignSelf: 'center'}} onPress={this.props.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                    <Text style={{color: '#800080'}}>
                        More Information About HIV
                    </Text>
                </Button>
            </View>
        )
    }
}

export class FollowupRec extends Component {
    render() {
        return (
            <View style={styles.testRec}>
                <Text style={{color: '#333', fontSize: 16, marginBottom: 20}}>
                    An HIV test is recommended every three months for many guys, but some guys might want or need to get tested more frequently. Talk to your doctor or other healthcare provider if you have questions about how frequently you should get tested, or whether you need another HIV test now. 
                </Text>
                <Button block success style={{ marginBottom: 20, borderRadius: 0, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }} onPress={this.props.pushNewRoute.bind(this, 'care-locator')}>
                    <Icon style={{color: 'white'}} name='ios-pin-outline' />
                    <Text style={{color: 'white'}}>
                        Find a Testing Center
                    </Text>
                </Button>
                <Button block style={{ marginBottom: 20, borderRadius: 0, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }} onPress={this.props.pushNewRoute.bind(this, 'reminders')}>
                    <Icon style={{color: 'white'}} name='ios-alarm-outline' />
                    <Text style={{color: 'white'}}>
                        Set a Reminder
                    </Text>
                </Button>
                <Button transparent style={{alignSelf: 'center'}} onPress={this.props.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                    <Text style={{color: '#800080'}}>
                        More Information About HIV
                    </Text>
                </Button>
            </View>
        )
    }
}

export class ContactDoc extends Component {
    render() {
        return (
            <View style={styles.testRec}>
                <Text style={{color: 'black', textAlign: 'center', paddingLeft: 10, paddingRight: 10}}>
                    You said you are seeing a doctor or other healthcare provider for HIV treatment. That’s great. {"\n"} You should contact your doctor or other healthcare provider if you have any questions about HIV treatment or about your health in general.
                </Text>
                <Button transparent style={{alignSelf: 'center'}} onPress={this.props.openLink.bind(this, 'https://www.aids.gov/hiv-aids-basics')}>
                    <Text style={{color: '#800080'}}>
                        More Information About HIV
                    </Text>
                </Button>
            </View>
        )
    }
}