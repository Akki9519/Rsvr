import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function FDetail({route}: any) {
  const navigation: any = useNavigation();
  const list = route.params.list;
  console.log(list);

  return (
    <>
      <View style={{margin: 14}}>
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: 20,
            fontStyle: 'italic',
            paddingTop: 20,
          }}>
          {list.title}
        </Text>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Image
            style={{height: 250, width: 320, borderRadius: 10}}
            source={list.photo}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              paddingTop: 20,
              color: 'black',
              textAlign: 'center',
              fontSize: 16,
            }}>
            {list.desc}
          </Text>
        </View>

        <View style={{marginTop: 8}}>
          <View style={styles.a}>
            <Text
              style={{
                fontSize: 20,
                color: 'red',
                paddingLeft: 20,
                fontFamily: 'sans',
              }}>
              City:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingLeft: 2,
                fontFamily: 'serif',
                marginLeft: 82,
              }}>
              {list.city}
            </Text>
          </View>
          <View style={styles.a}>
            <Text
              style={{
                fontSize: 20,
                color: 'red',
                paddingLeft: 20,
                fontFamily: 'sans',
              }}>
              Distance:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingLeft: 2,
                fontFamily: 'serif',
                marginLeft: 40,
              }}>
              {list.distance}km
            </Text>
          </View>

          <View style={styles.a}>
            <Text
              style={{
                fontSize: 20,
                color: 'red',
                paddingLeft: 20,
                fontFamily: 'sans',
              }}>
              Price:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingLeft: 2,
                fontFamily: 'serif',
                marginLeft: 74,
              }}>
              {list.price}
            </Text>
          </View>
          <View style={styles.a}>
            <Text
              style={{
                fontSize: 20,
                color: 'red',
                paddingLeft: 20,
                fontFamily: 'sans',
              }}>
              Rating:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingLeft: 2,
                fontFamily: 'serif',
                marginLeft: 60,
              }}>
              {list.avgRating}*
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.b}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'serif',
                backgroundColor: 'darkblue',
                borderRadius: 12,
                padding: 10,
              }}
              onPress={() => {
                navigation.navigate('Booking Form', {list: list});
              }}>
              Book Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  a: {
    flexDirection: 'row',
  },
  b: {
    width: Dimensions.get('window').width * 0.4,
    marginLeft: 100,
    marginTop: 20,
    color: 'white',
  },
  c: {
    width: Dimensions.get('window').width * 0.4,
    marginLeft: 20,
    color: 'white',
  },
  d: {
    flexDirection: 'row',
    marginTop: 25,
  },
});
