import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Image} from 'react-native';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <Image
            source={require('../assets/images/icons/search.png')}
            style={{height: 30, width: 30}}
          />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24 / 1.5,
  },
  inner: {
    flexDirection: 'row',
  },
  search: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 1,
    paddingLeft: 4,
  },
  field: {
    backgroundColor: '#ffffff',
    paddingLeft: 52,
    paddingRight: 18,
    paddingVertical: 18,
    borderRadius: 16,
    height: 54,
    flex: 1,
    shadowColor: '#333',
    shadowRadius: 4,
    shadowOpacity: 0.1,
    width: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  filter: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default Search;
