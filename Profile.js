

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Profile extends React.Component {
    state = {score1: '',};
    state = {score2: '',score3:'',score4:'',score5:'',score6:''};

    static navigationOptions = {
        title: 'Calculate Scores',
    };
    render() {
        let { score1 } = this.state;
        let { score2,score3,score4,score5,score6 } = this.state;

        return (
            //style={styles.container}
            //<View>
            <KeyboardAwareScrollView
                //style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                //contentContainerStyle={styles.container}
                //scrollEnabled={false}
            >
                <Text style={styles.welcome}>
                    Please enter in your 6 most recent scores:
                </Text>

                <TextField
                    label='Score 1'
                    value={score1}
                    onChangeText = { (score1) => this.setState({ score1 }) }
                />
                <TextField
                    label='Score 2'
                    value={score2}
                    onChangeText = { (score2) => this.setState({ score2 }) }
                />
                <TextField
                    label='Score 3'
                    value={score3}
                    onChangeText = { (score3) => this.setState({ score3 }) }
                />
                <TextField
                    label='Score 4'
                    value={score4}
                    onChangeText = { (score4) => this.setState({ score4 }) }
                />
                <TextField
                    label='Score 5'
                    value={score5}
                    onChangeText = { (score5) => this.setState({ score5 }) }
                />
                <TextField
                    label='Score 6'
                    value={score6}
                    onChangeText = { (score6) => this.setState({ score6 }) }
                />

                <Button
                    onPress={() => Alert.alert('Calculating your Classification!!!!')}
                    title="Calculate"
                />

            </KeyboardAwareScrollView>
            //</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
