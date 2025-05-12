import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const TabuadaScreen = ({ navigation }) => {
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ImageBackground
      source={require('../../assets/fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>📚 Escolha a tabuada:</Text>

        <ScrollView contentContainerStyle={styles.buttonContainer}>
          {numbers.map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.button}
              onPress={() => navigation.navigate('Prática', { number: num })}
            >
              <Text style={styles.buttonText}>Tabuada do {num} ✏️</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TabuadaScreen;
