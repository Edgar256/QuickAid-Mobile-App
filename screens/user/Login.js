import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../../constants';
import {isValidEmail} from '../../utils/helpers';
import axios from 'axios';
import {apiURL} from '../../utils/apiURL';
import Spinner from '../../components/Spinner';
import AlertDanger from '../../components/AlertDanger';
import AlertSuccess from '../../components/AlertSuccess';

export default function Index({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      // Implement your login logic here
      if (!email) return setError('Please add email');
      if (!isValidEmail(email)) return setError('Please enter a Valid email');
      setError('');

      if (!password) return setError('Please add password');
      if (password.length < 6)
        return setError('Password should be more than 6 characters');
      setError('');

      const payload = {email, password};
      console.log(payload);

      setIsLoading(true);

      axios.post(`${apiURL}/users/signin`, payload).then(res => {
        if (res.data.status === 200) {
          setIsLoading(false);
          console.log(res.data.token);
          setSuccessMessage('Login Successful');
          setTimeout(() => {
            // return navigation.navigate('UserSubmitMedicalHistory');
          }, 2000);
        } else if (res.data.status === 401) {
          setError(res.data.error);
          return setIsLoading(false);
        } else {
          setError('server error.');
          return setIsLoading(false);
        }
      });
    } catch (error) {
      setError('Wrong credentials.');
      return setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error && <AlertDanger text={error} />}
      {successMessage && <AlertSuccess text={successMessage} />}

      {isLoading ? (
        <Spinner />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightGray,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
