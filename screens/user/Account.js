import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const PersonalDetailsPage = () => {
  // Demo data for personal details
  const userDetails = [
    {label: 'Name', value: 'John Doe'},
    {label: 'Email', value: 'johndoe@example.com'},
    {label: 'Phone', value: '+1234567890'},
    // Add more details as needed
  ];

  // Render item for FlatList
  const renderItem = ({item}) => (
    <View style={styles.detailsContainer}>
      <Text style={styles.label}>{item.label}:</Text>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal Details</Text>
      <FlatList
        data={userDetails}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
