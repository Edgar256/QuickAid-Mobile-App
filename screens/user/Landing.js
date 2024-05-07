import React, {useState, useEffect} from 'react';
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
import axiosClient from '../../utils/axiosClient';
import Spinner from '../../components/Spinner';

const LandingPage = ({navigation}) => {
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
    <ScrollView style={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Text style={styles.text}>Hello , {user?.name} !</Text>
      )}
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
          <Icon name="ambulance" size={70} color={COLORS.primary} />
        </View>
        <Text style={styles.sectionText}>Order an Ambulance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('UserBlogs')}>
        <View style={styles.iconContainer}>
          <Icon name="feed" size={70} color={COLORS.primary} />
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
    paddingBottom: 50,
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
