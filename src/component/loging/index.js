import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


const login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is Login page</Text>
            <TextInput onChange={setEmail}
             placeholderTextColor={'black'}
            placeholder={'enter your email'}
            style={styles.textInput} 
            />
            <TextInput 
            onChange={setPassword} 
            placeholderTextColor={'black'} 
            placeholder={'enter your password'} 
            style={styles.textInput} 
            />
            <TouchableOpacity 
            style={[styles.button, {backgroundColor: 'yellow'}]}
            onPress={() => {}}
            >
            <Text style={[styles.text, { fontSize: 20 }]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}
            >
            <Text style={[styles.text, { fontSize: 20 }]}>Go to Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        width: 200,
        height: 50,
        marginBottom: 10,
        backgroundColor: 'green',
        color: 'black',
    },
    text: {
        color: "black",
        fontSize: 30,
    },
    button: {
        backgroundColor: 'red',
        weidth: 100,
        height: 50,
    },
});

export default login;