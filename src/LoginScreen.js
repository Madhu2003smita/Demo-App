import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [loading, setLoading] = useState(false);

  
  const handleLogin = async () => {
    setLoading(true);
      const response = await axios.post('https://helpdesk.productdemourl.com/mobile/deepak/public/v3/api/login', {
        email:email,
        password:password,
      });

      if (response.status === 200 && response.data.success) {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'You have logged in successfully!',
        });
        
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: response.data.message||'Invalid email or password.',
        });
      }
    } 
  
  
    return (
    <View style={styles.container}>
      <Image
        source={require('../image/image.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Let's Get Started</Text>
      <Text style={styles.subtitle1}>Create an account</Text>
      <Text style={styles.label}>Enter your email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
      />
       <TouchableOpacity style={styles.iconContainer} onPress={() => setShowPassword(!showPassword)}>
        <Image 
          source={require('../image/eye.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
      <TouchableOpacity onPress={() => { }}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerText}>
          If you have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </Text>
        <Text style={styles.linkText} onPress={() => navigation.navigate('Inbox')}>Inbox</Text>
      </TouchableOpacity>
      <Toast />
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
    width: 200,
    height: 200,
    margin: 60,
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: 'bold',
    textAlign: 'vertical',
  },
  subtitle1: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'vertical',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingRight: 40,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', 
    
  },
  showPasswordButton: {
    paddingHorizontal: 10,
  },
  showPasswordText: {
    color: '#3DA6D7',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    right: 10, 
    height: '100%',
    alignItems: 'stretch',
    top: 10,
  },
  icon: {
    height: 20,
    width: 20,
  
  },
  forgotPassword: {
    textAlign: 'right',
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#3DA6D7',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  registerText: {
    textAlign: 'center',
  },
  linkText: {
    color: '#3DA6D7',
    fontWeight: 'bold',
  },
});

export default LoginScreen;

/*
try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        email,
        password,
      });
 if (response.status === 200 && response.data.success) {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: 'You have logged in successfully!',
      });https://helpdesk.productdemourl.com/mobile/deepak/public/v3/api/login
    } else {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: response.data.message || 'Invalid email or password.',
      });
    }
    if (response.status === 200 && response.data.success) {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'You have logged in successfully!',
        });
        
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: response.data.message || 'Invalid email or password.',
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
      method:"post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: postEmail,
          password: postPassword,
        })*/