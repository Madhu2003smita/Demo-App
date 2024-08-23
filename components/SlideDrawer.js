import React from 'react';
import { View, Text, Button } from 'react-native';

const SlideDrawer = ({ route }) => {
  const person = route?.params?.person || {};

  return (
    <View>
      <Text>Name: {person.name}</Text>
      <Text>Email: {person.email}</Text>
      <Button title="Create Ticket" onPress={() => {}} />
      <Button title="Open Ticket" onPress={() => {}} />
      <Button title="Closed Ticket" onPress={() => {}} />
    </View>
  );
};

export default SlideDrawer;