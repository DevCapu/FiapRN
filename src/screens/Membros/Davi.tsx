
import React from 'react';
import { View, Image, Text, Button, Linking, StyleSheet, ImageBackground } from 'react-native';
import { Separator } from 'src/components/Separator';

const Davi = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://w0.peakpx.com/wallpaper/1005/871/HD-wallpaper-toy-story-2-buzz-disney-ham-jessie-lotso-rex-woody.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://i.ibb.co/vZr6x1P/davi.jpg' }} style={styles.image} />
          <View style={styles.buttonColumn}>
            <View style={styles.buttonContainer}>
              <Button 
                title="GitHub" 
                onPress={() => Linking.openURL('https://github.com/devcapu')} 
                color="#78D374"
              />
            </View>
            <Separator size={16}/>
            <View style={styles.buttonContainer}>
              <Button 
                title="LinkedIn" 
                onPress={() => Linking.openURL('https://www.linkedin.com/in/devcapu/')} 
                color="#78D374"
              />
            </View>
          </View>
        </View>
        <Text style={styles.name}>Davi Moreno Borges</Text>
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>Graduado em Ciência da Computação e atualmente estou cursando um MBA em Desenvolvimento Mobile. Sou apaixonado por tecnologia, vejo nela a possibilidade de melhorar a vida das pessoas além de uni-las.</Text>
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
    width: 175,
    height: 175,
    borderRadius: 50,
    marginRight: 48,
  },
  buttonColumn: {
    flexDirection: 'column',
  },
  buttonContainer: {
    marginVertical: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  bioContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 8,
    borderRadius: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white', // Cor do texto para contraste
  },
});

export default Davi;
