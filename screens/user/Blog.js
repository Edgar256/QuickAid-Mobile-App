import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';

const BlogDetailsPage = ({route, navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{route?.params?.title}</Text>
      <Text style={styles.content}>{route?.params?.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

// Export the component
export default BlogDetailsPage;
