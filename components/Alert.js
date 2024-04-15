import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants';

const Alert = ({text}) => {
  return (
    <View style={styles.alert}>
      <Text style={styles.alertText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkred',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  alertText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Alert;
