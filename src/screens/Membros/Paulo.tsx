import React from 'react';
import { View, Image, Text, Button, Linking, StyleSheet, ImageBackground } from 'react-native';
import { Separator } from 'src/components/Separator';

const Paulo = () => {
  return (
	<ImageBackground 
	  source={{ uri: 'https://i.redd.it/gjxy2lab58my.jpg' }} 
	  style={styles.background}
	>
	  <View style={styles.container}>
		<View style={styles.header}>
		  <Image source={{ uri: 'https://i.ibb.co/FVbfCyN/paulo.jpg' }} style={styles.image} />
		  <Text style={styles.name}>Paulo George M. Richa</Text>
		</View>
		<Text style={styles.bio}>Desenvolvedor Mobile Android Java e Kotlin com experiência em projetos utilizando boas práticas, metodologia ágil (Scrum, MVC), controle de versão distribuído (Git), integração com APIs REST e Webservices, banco de dados relacionais e não relacionais, libs Jetpack e Material Design, Arquiteturas MVP Clean e MVVM.</Text>
		<View style={styles.buttonContainer}>
		  <Button title="GitHub" onPress={() => Linking.openURL('https://github.com/pauloricha')} />
		</View>
		<Separator size={16}/>
		<View style={styles.buttonContainer}>
		  <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/paulo-george-m-richa-a8751731/')} />
		</View>
	  </View>
	</ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
	flex: 1,
	resizeMode: 'cover',
  backgroundColor: 'rgba(0,0,0,0.5)',
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
	width: 175,
	height: 175,
	borderRadius: 50,
	marginBottom: 8,
  },
  name: {
	fontSize: 24,
	fontWeight: 'bold',
  },
  bio: {
	fontSize: 16,
	textAlign: 'center',
	marginVertical: 16,
  },
  buttonContainer: {
	width: '100%',
	marginVertical: 8,
  },
});

export default Paulo;