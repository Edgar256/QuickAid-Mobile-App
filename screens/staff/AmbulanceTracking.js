import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS } from '../../constants';
// import { getAmbulanceLocation } from '../../api'; // Assuming you have an API function to fetch ambulance location

const AmbulanceTrackingScreen = () => {
  const [ambulanceLocation, setAmbulanceLocation] = useState(null);

  useEffect(() => {
    // Fetch ambulance location when component mounts
    const fetchAmbulanceLocation = async () => {
      const location = ''
    //   await getAmbulanceLocation(); // Function to fetch ambulance location from API
      setAmbulanceLocation(location);
    };
    fetchAmbulanceLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambulance Tracking</Text>
      {ambulanceLocation ? (
        <View>
          <Text style={styles.locationText}>Current Location: {ambulanceLocation}</Text>
          {/* Map component to display ambulance location */}
          {/* You can use a map library or your custom component for displaying the map */}
          {/* Example: <MapView style={styles.map} /> */}
        </View>
      ) : (
        <Text style={styles.loadingText}>Fetching ambulance location...</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Cancel Dispatch</Text>
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
  locationText: {
    fontSize: 18,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: COLORS.danger,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default AmbulanceTrackingScreen;
