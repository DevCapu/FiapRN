
import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet, ImageBackground } from 'react-native';
import { Separator } from 'src/components/Separator';

const Felipe = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://wallpapers.com/images/hd/the-sopranos-x4yz70r1bf8puh5v.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://avatars.githubusercontent.com/u/19232807?v=4' }} style={styles.image} />
          <Text style={styles.name}>Felipe Moreno Borges</Text>
        </View>
        <Text style={styles.bio}>Graduado em Ciência da Computação e atualmente estou cursando um MBA em Desenvolvimento Mobile. Sou apaixonado por tecnologia, vejo nela a possibilidade de melhorar a vida das pessoas além de uni-las.</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/devcapu')}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
          <Separator size={16} />
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/devcapu/')}>
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#c32a38',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Felipe;
