/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  StaffLogin,
  StaffSignUp,
  UserBlogs,
  UserLogin,
  UserSignUp,
  UserSubmitMedicalHistory,
  Welcome,
} from './screens';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Welcome'}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Welcome'}}
        />

        {/* User screens */}
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserSignUp"
          component={UserSignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserSubmitMedicalHistory"
          component={UserSubmitMedicalHistory}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserBlogs"
          component={UserBlogs}
          options={{
            headerShown: false,
          }}
        />

        {/* Staff screens */}
        <Stack.Screen
          name="StaffLogin"
          component={StaffLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StaffSignUp"
          component={StaffSignUp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
