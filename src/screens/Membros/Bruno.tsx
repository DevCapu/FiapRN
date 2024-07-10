
import React from 'react';
import { View, Image, Text, Button, Linking, StyleSheet, ImageBackground } from 'react-native';
import { Separator } from 'src/components/Separator';

const Bruno = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/originals/cf/54/f8/cf54f89322ec6ad6bd47a1937e93d732.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://avatars.githubusercontent.com/u/81889362?v=4' }} style={styles.image} />
          <Text style={styles.name}>Bruno Vieira</Text>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <Button title="GitHub" onPress={() => Linking.openURL('https://github.com/BrunoVieiraSouza')} color="#FFD90F" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/bruno-costa/')} color="#FFD90F"/>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.bio}>I'm a developer mobile iOS. Here I present my personal projects, which I am using my experience in Swift.
        </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0056A4', // Cor azul
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#0056A4',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  buttonContainer: {
    width: '45%',
    marginVertical: 8,
  },
});

export default Bruno;
