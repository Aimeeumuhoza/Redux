import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from "react-native";

const Register = () => {
    const handleSignUp = () => {
        // Logic for handling sign up (if needed)
        // For now, let's just navigate to the "login" screen
        navigation.navigate('login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>SignUp</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    button: {
        width: "80%",
        height: 40,
        backgroundColor: "blue",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Register;
