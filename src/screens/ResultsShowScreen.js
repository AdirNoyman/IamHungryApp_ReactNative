import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(result);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  const { name, photos } = result;

  return (
    <View style={styles.container}>
      <Text style={styles.styleName}>{name}</Text>
      <FlatList
        data={photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  styleName: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
  },
  image: {
    height: 200,
    width: 300,
    margin: 10,
    borderRadius: 5,
  },
});

export default ResultsShowScreen;
