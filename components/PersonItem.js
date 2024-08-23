import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const PersonItem = ({ person, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={{ width: 50, height: 50 }} />
        <Text>{person.name}</Text>
        <Text>{person.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PersonItem;