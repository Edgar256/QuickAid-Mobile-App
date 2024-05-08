import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Spinner from '../../components/Spinner';
import axiosClient from '../../utils/axiosClient';
import moment from 'moment';

const PastAmbulanceRequests = () => {
  // Dummy data for past ambulance requests

  const [ambulanceRequests, setAmbulanceRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getAmbulanceOrders = async () => {
    try {
      const res = await axiosClient.get('/users/getAmbulanceOrders');

      if (res.status === 200) {
        setIsLoading(false);
        return setAmbulanceRequests(res.data.message);
      } else {
        setIsLoading(false);
        setError('Error requesting for Ambulance');
        return;
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAmbulanceOrders();
  }, []);

  const __ambulanceRequests = [
    {
      id: '1',
      location: '123 Main St',
      time: '2024-03-15 09:30',
      status: 'Completed',
    },
    {
      id: '2',
      location: '456 Elm St',
      time: '2024-03-14 17:45',
      status: 'Cancelled',
    },
    {
      id: '3',
      location: '789 Oak St',
      time: '2024-03-13 13:20',
      status: 'Completed',
    },
    // Add more dummy data as needed
  ];

  // Render item function for FlatList
  const renderAmbulanceRequest = ({item}) => (
    <View style={styles.requestContainer}>
      <Text style={styles.locationText}>Location: {item.location}</Text>
      <Text style={styles.locationText}>
        Health Condition: {item.healthCondition}
      </Text>
      <Text style={styles.locationText}>Notes: {item.notes}</Text>
      <Text style={styles.timeText}>
        Date Requested: {moment(item.createdAt).format('LLLL')}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Past Ambulance Requests ({ambulanceRequests.length})</Text>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={ambulanceRequests}
          renderItem={renderAmbulanceRequest}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  requestContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 7,
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
