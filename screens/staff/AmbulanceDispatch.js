import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const AmbulanceDispatchScreen = ({ navigation }) => {
  const [destination, setDestination] = useState('');
  const [emergencyType, setEmergencyType] = useState('');

  const handleDispatch = () => {
    // Implement ambulance dispatch logic here
    console.log('Dispatching ambulance to:', destination);
    console.log('Emergency type:', emergencyType);
    // Assuming a successful dispatch, navigate to another screen
    navigation.navigate('DispatchConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispatch Ambulance</Text>
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Type"
        value={emergencyType}
        onChangeText={setEmergencyType}
      />
      <TouchableOpacity style={styles.button} onPress={handleDispatch}>
        <Text style={styles.buttonText}>Dispatch Ambulance</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AmbulanceDispatchScreen;
