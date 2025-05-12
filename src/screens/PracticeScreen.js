import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const PracticeScreen = ({ route }) => {
  const { number } = route.params;
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [randomMultiplier, setRandomMultiplier] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    generateRandomMultiplier();
  }, []);

  const generateRandomMultiplier = () => {
    const newMultiplier = Math.floor(Math.random() * 10) + 1;
    setRandomMultiplier(newMultiplier);
    setInput('');
    setMessage('');
  };

  const checkAnswer = () => {
    const correctAnswer = number * randomMultiplier;
    if (parseInt(input) === correctAnswer) {
      setMessage('🎉 Correto! Parabéns! 🎈');
      setCorrectCount(prev => prev + 1);
    } else {
      setMessage(`😢 Errado. A resposta certa é ${correctAnswer}`);
      setIncorrectCount(prev => prev + 1);
    }
  };

  const totalAttempts = correctCount + incorrectCount;
  const accuracy = totalAttempts > 0 ? ((correctCount / totalAttempts) * 100).toFixed(2) : '0.00';

  if (randomMultiplier === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>🤔 Quanto é {number} x {randomMultiplier}?</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite sua resposta aqui!"
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity style={styles.button} onPress={checkAnswer}>
          <Text style={styles.buttonText}>Verificar ✅</Text>
        </TouchableOpacity>

        {message !== '' && <Text style={styles.feedback}>{message}</Text>}

        <TouchableOpacity style={[styles.button, styles.newButton]} onPress={generateRandomMultiplier}>
          <Text style={styles.buttonText}>Nova Pergunta 🔁</Text>
        </TouchableOpacity>

        <View style={styles.stats}>
          <Text style={styles.statsText}>🏆 Acertos: {correctCount}</Text>
          <Text style={styles.statsText}>💥 Erros: {incorrectCount}</Text>
          <Text style={styles.statsText}>🎯 Precisão: {accuracy}%</Text>
        </View>
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
  input: {
    borderWidth: 2,
    borderColor: '#87CEEB',
    borderRadius: 10,
    padding: 12,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#FFF',
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
  feedback: {
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    color: '#800080',
  },
  stats: {
    marginTop: 30,
    alignItems: 'center',
  },
  statsText: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default PracticeScreen;
