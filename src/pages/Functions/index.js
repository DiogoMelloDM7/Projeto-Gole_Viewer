import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export function Functions() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>ID de conexão</Text>
                <TextInput
                    placeholder='Insira o ID do dispositivo que deseja-se conectar'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('AnotherPhone')}
                > 
                    <Text style={styles.buttonText}>Conectar a este dispositivo</Text>
                </TouchableOpacity>

                
            </Animatable.View>

      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgba(25, 25, 55, 1)',
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
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 20,
        marginBottom: '40%',
        marginTop: '30%',
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
});
