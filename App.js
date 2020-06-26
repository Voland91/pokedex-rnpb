import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {fetchPokemonsList} from './apiService';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchPokemonsList();
      setData(response.results);
    })();
  }, []);

  const barStyle = Platform.OS === 'ios' ? 'default' : 'light-content';

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor="black" />
      <SafeAreaView style={styles.appContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({item, index, separator}) => {
            return (
              <TouchableOpacity
                onPress={() => Alert.alert(item.name, item.url)}
                key={index}
                style={styles.itemContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '100',
  },
  itemContainer: {
    padding: 8,
  },
});

export default App;