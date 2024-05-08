import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS} from '../../constants';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker} from 'react-native-maps';
import axiosClient from '../../utils/axiosClient';
import AlertDanger from '../../components/AlertDanger';
import AlertSuccess from '../../components/AlertSuccess';
import Spinner from '../../components/Spinner';
import {ScrollView} from 'react-native-gesture-handler';

const OrderAmbulance = ({navigation}) => {
  const [location, setLocation] = useState('');
  const [healthCondition, setHealthCondition] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleMapPress = event => {
    // Handle map press to set selected location
    const coordinate = event.nativeEvent.coordinate;
    setSelectedLocation(coordinate);
  };

  //   const handleChoosePhoto = () => {
  //     const options = {
  //       title: 'Select Photo',
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //     };

  //     ImagePicker.showImagePicker(options, response => {
  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else if (response.error) {
  //         console.log('ImagePicker Error: ', response.error);
  //       } else {
  //         const source = { uri: response.uri };
  //         setPhoto(source);
  //       }
  //     });
  //   };

  const handleOrderSubmit = async () => {
    setSuccessMessage('');
    setError('');

    // Handle submission logic
    if (!location) return setError('Please add a location');
    setError(''); //healthCondition

    if (!healthCondition) return setError('Please add a health condition');
    setError('');

    if (!notes) return setError('Please add a Notes');
    setError('');

    const payload = {location, healthCondition, notes};
    console.log(payload);
    setIsLoading(true);
    const res = await axiosClient.post('/users/createAmbulanceOrder', payload);

    if (res.status === 201) {
      setIsLoading(false);
      setSuccessMessage('Ambulance Order has been Submitted');
      setTimeout(() => {
        return navigation.navigate('UserHistory');
      }, 2000);
    } else {
      setIsLoading(false);
      setError('Error requesting for Ambulance');
      return;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Select location from Google Maps:
        </Text>
        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={{
            latitude: 0.3152,
            longitude: 32.5819,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress}>
          {selectedLocation && ( // Render marker if location is selected
            <Marker coordinate={selectedLocation} />
          )}
        </MapView>
        {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        {/* <GooglePlacesAutocomplete
          placeholder="Enter Location"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setLocation(data.description);
          }}
          query={{
            key: 'AIzaSyB5SYOZIrTnClbAFlEgyWNSbD4_frQdFAE',
            language: 'en',
          }}
          fetchDetails
          styles={{
            textInput: styles.input,
          }}
        /> */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={location}
          onChangeText={setLocation}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Health Condition:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Health Condition"
          value={healthCondition}
          onChangeText={setHealthCondition}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Notes:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Notes"
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
        />
      </View>
      {/* <View style={styles.section}>
        <Text style={styles.sectionText}>Select Photo:</Text>
        <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
          <Icon name="camera" size={24} color={COLORS.gray} />
          <Text style={styles.photoButtonText}>Choose Photo</Text>
        </TouchableOpacity>
        {photo && (
          <Image source={photo} style={styles.photoPreview} />
        )}
      </View> */}

      {error && <AlertDanger text={error} />}
      {successMessage && <AlertSuccess text={successMessage} />}

      {isLoading ? (
        <Spinner />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleOrderSubmit}>
          <Text style={styles.buttonText}>Submit Order</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 10,
  },  
  section: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    height: 250,
  },
});

export default OrderAmbulance;
