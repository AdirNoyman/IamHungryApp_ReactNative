import React from 'react';
import { View, TextInput, StyleSheet, Input, Text, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
  const { name, image_url, rating, review_count } = result;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.reviewStyle}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  reviewStyle: {
    marginBottom: 5,
  },
});

export default ResultsDetails;
