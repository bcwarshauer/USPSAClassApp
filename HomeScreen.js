import React from 'react';
import {Text, View, Button, StyleSheet, Alert} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'USPSA Classification Calculator',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> {"\n"}Select an Option:</Text>


                 <Button
                     onPress={this._onPressButton}
                     title="Option 1"
                     color="#841584"
                 />
                 <Button
                     onPress={this._onPressButton2}
                     title="Option 2"
                 />
                <Button
                    onPress={() => this.props.navigation.navigate('Profile')}
                    title="Calculate Scores"
                />

             </View>




        );
    }
    _onPressButton() {
        Alert.alert('You selected option 1')
    }
    _onPressButton2() {
        Alert.alert('You suck!')
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