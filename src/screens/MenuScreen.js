import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>📚 Escolha uma opção</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tabuada')}
        >
          <Text style={styles.buttonText}>Escolha a Tabuada 🔢</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.newButton]}
          onPress={() => navigation.navigate('Tabuada Aleatória')}
        >
          <Text style={styles.buttonText}>Tabuada Aleatória 🎲</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  newButton: {
    backgroundColor: '#00BFFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
