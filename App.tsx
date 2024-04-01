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
  Welcome,
  LoginOptions,

  // Patient Screens
  UserBlog,
  UserBlogs,
  UserLanding,
  UserLogin,
  UserSignUp,
  UserSubmitMedicalHistory,

  // Staff Screens
  StaffLogin,
  StaffSignUp,
  StaffAmbulanceDispatch,
  StaffAmbulanceTracking,
  StaffDashboard,
  StaffAmbulanceDispatchConfirmation,
  StaffAmbulanceDispatchHistory,
  StaffPatientAdmission,
  StaffProfile,
  StaffSettings,
} from './screens';
import TabNavigator from './navigations/TabNavigator';
import DrawerNavigator from './navigations/DrawerNavigator';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Welcome'}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name="LoginOptions"
          component={LoginOptions}
          options={{title: 'Welcome', headerShown: false}}
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
            headerShown: true,
            title: 'Blogs',
          }}
        />
        <Stack.Screen
          name="UserBlog"
          component={UserBlog}
          options={{
            headerShown: true,
            title: 'Blog',
          }}
        />
        <Stack.Screen
          name="UserLanding"
          component={UserLanding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
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
        {/* 
  , */}
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="StaffAmbulanceTracking"
          component={StaffAmbulanceTracking}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StaffDashboard"
          component={StaffDashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StaffAmbulanceDispatchConfirmation"
          component={StaffAmbulanceDispatchConfirmation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StaffAmbulanceDispatchHistory"
          component={StaffAmbulanceDispatchHistory}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StaffPatientAdmission"
          component={StaffPatientAdmission}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StaffProfile"
          component={StaffProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StaffSettings"
          component={StaffSettings}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
