import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Index({navigation}) {
  const [allergies, setAllergies] = useState('');
  const [pastTreatments, setPastTreatments] = useState('');
  const [currentMedications, setCurrentMedications] = useState('');
  navigation.navigate('TabNavigator');

  const handleSubmit = () => {
    // Implement your submission logic here
    console.log('Allergies:', allergies);
    console.log('Past Treatments:', pastTreatments);
    console.log('Current Medications:', currentMedications);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical History</Text>
      <TextInput
        style={styles.input}
        placeholder="Allergies"
        value={allergies}
        onChangeText={setAllergies}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Past Treatments"
        value={pastTreatments}
        onChangeText={setPastTreatments}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Current Medications"
        value={currentMedications}
        onChangeText={setCurrentMedications}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
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
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
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
