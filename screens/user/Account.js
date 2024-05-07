import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axiosClient from '../../utils/axiosClient';
import moment from 'moment';

const PersonalDetailsPage = ({navigation}) => {
  // Demo data for personal details
  const userDetails = [
    {label: 'Name', value: 'John Doe'},
    {label: 'Email', value: 'johndoe@example.com'},
    {label: 'Phone', value: '+1234567890'},
    // Add more details as needed
  ];

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const res = await axiosClient.get('/users/getUser');

      if (res.status === 200) {
        setUser(res.data.message);
        return setIsLoading(false);
      } else {
        console.log('User is not authenticated');
        return navigation.navigate('Welcome');
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name: {user.name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.value}>Email :{user.email}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.value}>Phone :{user.phone}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.value}>
          Date Registered :{moment(user.createdAt).format('LLLL')}
        </Text>
      </View>
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
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
  },
});

export default PersonalDetailsPage;
