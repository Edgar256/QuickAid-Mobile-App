import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS} from '../../constants';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';
// import MapView from 'react-native-maps';

const OrderAmbulance = ({navigation}) => {
  const [location, setLocation] = useState('');
  const [healthCondition, setHealthCondition] = useState('');
  const [notes, setNotes] = useState('');

  const handleOrderSubmit = () => {
    // Handle submission logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Ambulance</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Select location from Google Maps:
        </Text>
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
            key: 'YOUR_GOOGLE_MAPS_API_KEY',
            language: 'en',
          }}
          fetchDetails
          styles={{
            textInput: styles.input,
          }}
        /> */}
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
      <TouchableOpacity style={styles.button} onPress={handleOrderSubmit}>
        <Text style={styles.buttonText}>Submit Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderAmbulance;
