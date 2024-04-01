import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Notifications</Text>
        <Switch
          trackColor={{ false: COLORS.lightGray, true: COLORS.primary }}
          thumbColor={notificationsEnabled ? COLORS.white : COLORS.lightGray}
          ios_backgroundColor={COLORS.lightGray}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: COLORS.lightGray, true: COLORS.primary }}
          thumbColor={darkModeEnabled ? COLORS.white : COLORS.lightGray}
          ios_backgroundColor={COLORS.lightGray}
          onValueChange={toggleDarkMode}
          value={darkModeEnabled}
        />
      </View>
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
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
