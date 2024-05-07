import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export function SignUp(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/fundo-login.jpg')}
                style={styles.backgroundImage}
            />
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.headerText}>Faça seu cadastro</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder='Digite seu e-mail'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                    secureTextEntry={true}
                />

                <Text style={styles.title}>Confirme sua Senha</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}
                > 
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    headerText: {
        fontSize: 24,
        color: 'white',
    },
    containerForm: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        marginBottom: '40%'
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: 'black',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4682B4',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    registerButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    registerText: {
        color: 'black',
        fontSize: 16,
    },
});
