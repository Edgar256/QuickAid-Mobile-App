import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {isValidEmail} from '../../utils/helpers';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import {apiURL} from '../../utils/apiURL';
import AlertDanger from '../../components/AlertDanger';
import AlertSuccess from '../../components/AlertSuccess';
import {COLORS} from '../../constants';

export default function Index({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    try {
      if (!fullName) return setError('Please add full names');
      if (fullName.length < 3)
        return setError('Fullnames should be more than 6 characters');
      setError('');

      if (!email) return setError('Please add email');
      if (!isValidEmail(email)) return setError('Please enter a Valid email');
      setError('');

      if (!phoneNumber) return setError('Please add phone number');
      if (phoneNumber.length < 6)
        return setError('Phone number should be more than 6 characters');
      setError('');

      if (!password) return setError('Please add password');
      if (password.length < 6)
        return setError('Password should be more than 6 characters');
      setError('');

      if (password !== confirmPassword)
        return setError('Passwords do not match');
      setError('');

      const payload = {name: fullName, email, password, phone: phoneNumber};
      setIsLoading(true);

      axios
        .post(`${apiURL}/staff/signup`, payload)
        .then(res => {
          console.log({res});
          if (res.status === 201) {
            setIsLoading(false);
            setSuccessMessage('Account has been created successfully');
            setTimeout(() => {
              return navigation.navigate('StaffLogin');
            }, 2000);
          } else {
            setError('Failed to sign up. Please try again.');
            return setIsLoading(false);
          }
        })
        .then(err => {
          return setIsLoading(false);
        });
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staff Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        color="black"
      />
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
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {error && <AlertDanger text={error} />}
      {successMessage && <AlertSuccess text={successMessage} />}

      {isLoading ? (
        <Spinner />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up & Accept</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.buttonPlain}
        onPress={() => navigation.navigate('StaffLogin')}>
        <Text style={styles.buttonTextPlain}>Already have Account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
