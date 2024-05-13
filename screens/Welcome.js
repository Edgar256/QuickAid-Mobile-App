import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, images} from '../constants';
import axiosClient from '../utils/axiosClient';

const WelcomeScreen = ({navigation}) => {
  const checkUserAuthentication = async () => {
    try {
      const userData = await axiosClient.get('/users/getUser');

      if (userData.status === 200) {
        console.log('User is authenticated');
        return navigation.navigate('TabNavigator'); //UserBlogs UserSubmitMedicalHistory TabNavigator
      } else {
        const staffData = await axiosClient.get('/staff/getStaff');
        if (staffData.status === 200) {
          return navigation.navigate('DrawerNavigator');
        } else {
          console.log('User is not authenticated');
          return false;
        }
      }
    } catch (error) {
      const staffData = await axiosClient.get('/staff/getStaff');
      if (staffData.status === 200) {
        return navigation.navigate('DrawerNavigator');
      } else {
        console.log('User is not authenticated');
        return false;
      }
      console.error('Error occurred during user authentication check:', error);
      // Handle error
    }
  };

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={images.WelcomeBackground} style={styles.backgroundImage} />
      <Image source={images.Logo} style={styles.logo} />
      <Text style={styles.text}>
        Welcome to QuickAid - Your Trusted First Aid and Ambulance Services App!
        Access instant first aid guidance, emergency ambulance services, medical
        history storage, and informative blogs. Download now for peace of mind
        during medical emergencies!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginOptions')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    padding: 30,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 100,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
