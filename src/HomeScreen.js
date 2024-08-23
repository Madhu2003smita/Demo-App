import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [faveoUrl, setFaveoUrl] = useState('');

  const handleFaveoUrlChange = (text) => {
    setFaveoUrl(text);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/api/faveo-url', {
        faveoUrl: faveoUrl,
      });
      
      console.log('API Response:', response.data);

    } catch (error) {
      
      console.error('API Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../image/faveo.png')}
        style={styles.image}
      />
      
      <View style={styles.form}>
      <TouchableOpacity onPress={() => navigation.navigate('Language')}>
        <Text style={styles.linkText}>Change Language</Text>
      </TouchableOpacity>
        <Text style={styles.label}>Faveo URL</Text>
        <TextInput
          style={styles.input}
          value={faveoUrl}
          onChangeText={handleFaveoUrlChange}
          placeholder="Enter Faveo URL"
        />
        <Text style={styles.faveoText} onPress={() => console.log('Forgot Faveo URL')}>
          Forgot Faveo URL?
        </Text>
        <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 150,
    margin: 10,
  },
  linkText: {
    textAlign: 'right',
    fontSize: 18,
    color: '#7cc1d7',
    fontWeight: 'bold',  
  },
  form: {
    textAlign: 'center',
    backgroundColor: '#fff',
    height: 60,
    width: '90%',
    paddingLeft: 20,
    marginBottom: 200,
    borderRadius: 10,
  },
  label: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  faveoText: {
    fontSize: 18,
    textAlign: 'right',
    color: '#7cc1d7',
    marginTop: 20,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#3DA6D7',
    borderRadius: 5,
    marginTop: 50,
    height: 45,
  },
  nextButtonText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default HomeScreen;

