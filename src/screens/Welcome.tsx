import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Welcome({navigation}: any) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          color: 'red',
          textAlign: 'center',
          fontFamily: 'serif',
          fontWeight: '800',
          marginTop: 80,
          fontSize: 20,
        }}>
        Welcome To RSVR Tech
      </Text>
      <View style={styles.a}>
        <Image
          source={require('../assets/images/kullu.png')}
          style={{height: 200, width: 200}}
        />
      </View>
      <Text
        style={{
          color: 'purple',
          textAlign: 'center',
          fontWeight: '800',
          marginTop: 80,
          fontSize: 20,
          backgroundColor: 'lightblue',
          borderRadius: 20,
          height: 40,
          paddingTop: 5,
          marginHorizontal: 80,
        }}
        onPress={() => navigation.navigate('Login')}>
        Start Tour
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  a: {alignItems: 'center'},
});
