import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  // Example function for navigating to another screen
  const navigateToDispatchScreen = () => {
    navigation.navigate('AmbulanceDispatch');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambulance App Dashboard</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToDispatchScreen}
      >
        <Text style={styles.buttonText}>Dispatch Ambulance</Text>
      </TouchableOpacity>
      {/* Add more components/buttons for other functionalities */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
