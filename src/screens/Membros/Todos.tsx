// src/screens/Membros.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const members = [
  { name: 'Participant 1', screen: 'Felipe' },
  { name: 'Participant 2', screen: 'Bruno' },
  { name: 'Participant 3', screen: 'Davi' },
  { name: 'Participant 4', screen: 'Paulo' },
];

const Membros = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {members.map((member, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate(member.screen)}>
          <Image source={{ uri: 'https://placekitten.com/200/200' }} style={styles.image} />
          <Text style={styles.text}>{member.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default Membros;
