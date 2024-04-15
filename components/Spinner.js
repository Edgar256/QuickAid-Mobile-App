import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.centered}>
      {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
