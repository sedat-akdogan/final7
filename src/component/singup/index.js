import React from 'react';
import { View, Text } from 'react-native';


const signup = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text
                style={{
                    color: "black",
                    fontSize: 30, alignContent: "center",
                    justifyContent: "center"
                }}
            >This is Sign Up page</Text>
        </View>
    );
};

export default signup;