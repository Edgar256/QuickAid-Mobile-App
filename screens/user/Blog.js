import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';

const BlogDetailsPage = ({route,navigation}) => {
  // Dummy data for blog details
  const {title, content, imageUrl} = route.params;
  // Dummy data for testing
  const dummyBlogDetails = {
    title: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in porta mauris, sed placerat leo. Integer auctor tortor eu ex condimentum, et tincidunt nisi faucibus. Fusce nec libero id turpis condimentum consequat.',
    //   imageUrl: 'https://via.placeholder.com/400x200',
  };

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   <Image source={{uri: imageUrl}} style={styles.image} />
    //   <Text style={styles.title}>{title}</Text>
    //   <Text style={styles.content}>{content}</Text>
    // </ScrollView>
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: dummyBlogDetails.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{dummyBlogDetails.title}</Text>
      <Text style={styles.content}>{dummyBlogDetails.content}</Text>
    </ScrollView>
  );
};

// Add navigation options for the header
BlogDetailsPage.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <HeaderBackButton onPress={() => navigation.goBack()} tintColor="#000" />
  ),
});

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
