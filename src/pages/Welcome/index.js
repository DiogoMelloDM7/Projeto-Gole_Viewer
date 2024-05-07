import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export function Welcome() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation='flipInY'
        source={require('../../assets/fundo-login.jpg')}
        style={styles.backgroundImage}
      />

      <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.titleMain}>GoleViewer</Text>
        <Text style={styles.title}>Compartilhe e se conecte com qualquer pessoa de qualquer lugar e a qualquer momento e desfrute do suporte remoto</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleMain: {
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
    color: 'rgba(255, 255, 255, 0.6)'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color: 'white'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  button: {
    backgroundColor: '#4682B4',
    padding: 15,
    borderRadius: 5,
    width: '180px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
