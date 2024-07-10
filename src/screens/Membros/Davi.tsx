
import React from 'react';
import { View, Image, Text, Button, Linking, StyleSheet } from 'react-native';
import { Separator } from 'src/components/Separator';

const Davi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/19232807?v=4' }} style={styles.image} />
        <Text style={styles.name}>Davi Moreno Borges</Text>
      </View>
      <Text style={styles.bio}>Graduado em Ciência da Computação e atualmente estou cursando um MBA em Desenvolvimento Mobile. Sou apaixonado por tecnologia, vejo nela a possibilidade de melhorar a vida das pessoas além de uni-las.</Text>
      <View style={styles.buttonContainer}>
        <Button title="GitHub" onPress={() => Linking.openURL('https://github.com/devcapu')} />
      </View>
      <Separator size={16}/>
      <View style={styles.buttonContainer}>
        <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/devcapu/')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  buttonContainer: {
    width: '100%',
    marginVertical: 8,
  },
});

export default Davi;
