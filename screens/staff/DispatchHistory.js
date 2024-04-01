import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
// import { getDispatchHistory } from '../../api'; // Assuming you have an API function to fetch dispatch history

const DispatchHistoryScreen = () => {
  const [dispatchHistory, setDispatchHistory] = useState([]);

  useEffect(() => {
    // Fetch dispatch history when component mounts
    const fetchDispatchHistory = async () => {
      const history = ""
      // await getDispatchHistory(); // Function to fetch dispatch history from API
      setDispatchHistory(history);
    };
    fetchDispatchHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispatch History</Text>
      {dispatchHistory.length > 0 ? (
        <FlatList
          data={dispatchHistory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>Ambulance ID: {item.ambulanceId}</Text>
              <Text style={styles.itemText}>Destination: {item.destination}</Text>
              <Text style={styles.itemText}>Dispatched At: {item.dispatchedAt}</Text>
              {/* Add more details as needed */}
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No dispatch history available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: COLORS.lightGray,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default DispatchHistoryScreen;
