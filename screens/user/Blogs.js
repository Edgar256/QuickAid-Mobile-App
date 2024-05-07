import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Spinner from '../../components/Spinner';
import axiosClient from '../../utils/axiosClient';
import {limitStringLength} from '../../utils/helpers';
import parser from 'html-react-parser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index({navigation}) {
  const [blogs, setBlogs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const res = await axiosClient.get('/users/getAllBlogs');

      if (res.status === 200) {
        setBlogs(res.data.message);
        return setIsLoading(false);
      } else {
        console.log('User is not authenticated');
        // return navigation.navigate('Welcome');
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleOpenBlog = data => {
    try {
      // AsyncStorage.setItem('currentBlogId', id);
      return navigation.navigate('UserBlog', data);
    } catch (error) {}
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleOpenBlog(item)}>
      <Text style={styles.title}>{limitStringLength(item.title, 0, 50)}</Text>
      <Text style={styles.content}>
        {limitStringLength(parser(item.content), 0, 200)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to our Blog !</Text>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={blogs}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#F2F5FB',
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});
