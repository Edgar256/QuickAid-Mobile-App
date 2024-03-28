import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PastAmbulanceRequests = () => {
  // Dummy data for past ambulance requests
  const ambulanceRequests = [
    { id: '1', location: '123 Main St', time: '2024-03-15 09:30', status: 'Completed' },
    { id: '2', location: '456 Elm St', time: '2024-03-14 17:45', status: 'Cancelled' },
    { id: '3', location: '789 Oak St', time: '2024-03-13 13:20', status: 'Completed' },
    // Add more dummy data as needed
  ];

  // Render item function for FlatList
  const renderAmbulanceRequest = ({ item }) => (
    <View style={styles.requestContainer}>
      <Text style={styles.locationText}>Location: {item.location}</Text>
      <Text style={styles.timeText}>Time: {item.time}</Text>
      <Text style={styles.statusText}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Past Ambulance Requests</Text>
      <FlatList
        data={ambulanceRequests}
        renderItem={renderAmbulanceRequest}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  requestContainer: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 14,
    marginBottom: 5,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PastAmbulanceRequests;
