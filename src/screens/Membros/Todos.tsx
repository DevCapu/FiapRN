// src/screens/Membros.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';


const members = [
  { name: 'Felipe Moreno', screen: 'Felipe', github: 'https://github.com/devcapu', linkedin: 'https://www.linkedin.com/in/felipe-moreno/', photo: 'https://avatars.githubusercontent.com/u/19232807?v=4' },
  { name: 'Bruno Vieira', screen: 'Bruno', github: 'https://github.com/BrunoVieiraSouza', linkedin: 'https://www.linkedin.com/in/bruno-costa/', photo: 'https://i.ibb.co/ZHRjxP9/bruno.jpg' },
  { name: 'Davi Pinedo', screen: 'Davi', github: 'https://github.com/davipinedo', linkedin: 'https://www.linkedin.com/in/davi-oliveira/', photo: 'https://i.ibb.co/vZr6x1P/davi.jpg' },
  { name: 'Paulo Silva', screen: 'Paulo', github: 'https://github.com/paulosilva', linkedin: 'https://www.linkedin.com/in/paulo-silva/', photo: 'https://i.ibb.co/FVbfCyN/paulo.jpg' }
];

const Membros = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {members.map(member => (
        <TouchableOpacity
          key={member.screen}
          style={styles.memberContainer}
          onPress={() => navigation.navigate(member.screen)}
        >
          <Image source={{ uri: member.photo }} style={styles.image} />
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.links}>
            <Text onPress={() => Linking.openURL(member.github)}>GitHub</Text> | 
            <Text onPress={() => Linking.openURL(member.linkedin)}> LinkedIn</Text>
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  memberContainer: {
    width: '45%',
    margin: '2.5%',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  links: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Membros;
