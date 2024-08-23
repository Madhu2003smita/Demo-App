import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);


  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://helpdesk.productdemourl.com/mobile/deepak/public/v3/user/create/api', {
        userName:userName,
        firstName:firstName,
        lastName:lastName,
      });
        if (response.status === 200 && response.data.success) {
          Toast.show({
            type: 'success',
            text1: 'Registration Successful',
            text2: 'You have registered successfully!',
          });
          navigation.navigate('Login');
        } else {
          Toast.show({
            type: 'error',
            text1: 'Registration Failed',
            text2: response.data.message || 'Please try again.',
          });
        }
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        Toast.show({
          type: 'error',
          text1: 'An error occurred',
          text2: 'Please try again later.',
        });
      } finally {
        setLoading(false);
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <Text style={styles.label}>User Name</Text>
      <TextInput
        style={styles.input}
        placeholder="User name"
        placeholderTextColor="#a9a9a9"
        value={userName}
        onChangeText={setUserName}
      />

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        placeholderTextColor="#a9a9a9"
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        placeholderTextColor="#a9a9a9"
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={loading}>
        <Text style={styles.registerButtonText}>
          {loading ? 'Registering...' : 'Register'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </TouchableOpacity>
      
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
  },
  registerButton: {
    backgroundColor: '#3DA6D7',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginText: {
    textAlign: 'center',
    marginBottom: 35,
  },
  linkText: {
    color: '#3DA6D7',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;

/*import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';  

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://helpdesk.productdemourl.com/mobile/deepak/public/v3/user/create/api', {
        fullName,
        email,
        phoneNumber,
      });


      if (response.status === 200 && response.data.success) {
        Alert.alert(
          'Registration Successful',
          'You have registered successfully!',
          [
            { text: 'OK', onPress: () => navigation.navigate('Login') },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert('Registration Failed', 'Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message); 
      Alert.alert('An error occurred', 'Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      

      <Text style={styles.label}>User Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#a9a9a9"
        value={userName}
        onChangeText={setUserName}
      />

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        placeholderTextColor="#a9a9a9"
        value={firstName}
        onChangeText={setFirstname}
      />



      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        placeholderTextColor="#a9a9a9"
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={loading}>
        <Text style={styles.registerButtonText}>
          {loading ? 'Registering...' : 'Register'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'center',
  },
  
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
  },
  
  registerButton: {
    backgroundColor: '#3DA6D7',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginText: {
    textAlign: 'center',
    marginBottom: 35,
  },
});

export default RegisterScreen;

https://helpdesk.productdemourl.com/mobile/deepak/public/v3/user/create/api

*/
/*function getRandomRole(){
    const roles = ["ADMIN", "USER"]
    return roles[(Math.random() * roles.length)]
}*/