import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const PatientAdmissionScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [patientCondition, setPatientCondition] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  const handleAdmitPatient = () => {
    // Implement patient admission logic here
    console.log('Patient Name:', patientName);
    console.log('Patient Condition:', patientCondition);
    console.log('Room Number:', roomNumber);
    // Assuming a successful admission, navigate to another screen
    // navigation.navigate('AdmissionConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admit Patient</Text>
      <TextInput
        style={styles.input}
        placeholder="Patient Name"
        value={patientName}
        onChangeText={setPatientName}
      />
      <TextInput
        style={styles.input}
        placeholder="Patient Condition"
        value={patientCondition}
        onChangeText={setPatientCondition}
      />
      <TextInput
        style={styles.input}
        placeholder="Room Number"
        value={roomNumber}
        onChangeText={setRoomNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdmitPatient}>
        <Text style={styles.buttonText}>Admit Patient</Text>
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

export default PatientAdmissionScreen;
