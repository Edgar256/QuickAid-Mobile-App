import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {COLORS, images} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const LandingPage = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Hello , John Doe !</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Welcome to QuickAid - Your Trusted First Aid and Ambulance Services
          App! Access instant first aid guidance, emergency ambulance services,
          medical history storage, and informative blogs. Download now for peace
          of mind during medical emergencies!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('OrderAmbulance')}>
          <Text style={styles.sectionText}> Learn how it works</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('OrderAmbulance')}>
        <View style={styles.iconContainer}>
          <Icon name="ambulance" size={100} color={COLORS.primary} />
        </View>
        <Text style={styles.sectionText}>Order an Ambulance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('UserBlogs')}>
        <View style={styles.iconContainer}>
          <Icon name="feed" size={100} color={COLORS.primary} />
        </View>
        <Text style={styles.sectionText}>Read Blogs</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: COLORS.white,
    padding: 20,
    margin: 0,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 5,
  },
  sectionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default LandingPage;
