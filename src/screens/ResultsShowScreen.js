import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
  const [results, setResults] = useState(null);
  const id = navigation.getParam('id');

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!results) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.imageStyle} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageStyle: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultsShowScreen;
