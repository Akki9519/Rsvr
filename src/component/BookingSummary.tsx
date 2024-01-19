import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingForm = ({route}: any) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userDetails, setUserDetails] = useState<any>([]);
  const list = route.params.list;

  const onHandleCross = (index: any) => {
    const updatedUserDetails = [...userDetails];
    updatedUserDetails.splice(index, 1);
    setUserDetails(updatedUserDetails);
  };

  const handleAdd = () => {
    const newBooking: any = {name, age};
    setUserDetails([...userDetails, newBooking]);
    setName('');
    setAge('');
  };
  const [AdminName, setAdminName] = useState('');
  const [AdminEmail, setAdminEmail] = useState('');

  const getData = async () => {
    let email: any = await AsyncStorage.getItem('email');
    let name: any = await AsyncStorage.getItem('name');
    console.log(email, name);
    setAdminName(name);
    setAdminEmail(email);
  };

  useEffect(() => {
    getData();
  }, []);

  const getBox = async () => {};
  useEffect(() => {
    getBox();
  }, []);

  return (
    <View style={styles.container}>
      {/* Booking Form */}
      <View style={styles.formContainer}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />

        <Text>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={{color: 'white', fontWeight: '600'}}>Add</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontWeight: '600',
              fontSize: 18,
              color: 'black',
            }}>
            Name:
          </Text>
          <Text style={{paddingLeft: 50}}>{AdminName}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontWeight: '600',
              fontSize: 18,
              color: 'black',
            }}>
            Email:
          </Text>
          <Text style={{paddingLeft: 50}}>{AdminEmail}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontWeight: '600',
              fontSize: 18,
              color: 'black',
            }}>
            Title:
          </Text>
          <Text style={{paddingLeft: 60}}>{list.title}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontWeight: '600',
              fontSize: 18,
              color: 'black',
            }}>
            City:
          </Text>
          <Text style={{paddingLeft: 64}}>{list.city}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        {userDetails.map((item: any, index: number) => (
          <View key={index} style={styles.bookingBox}>
            <TouchableOpacity onPress={() => onHandleCross(index)}>
              <Image
                source={require('../assets/images/icons/icons8-cross-50.png')}
                style={{
                  position: 'relative',
                  top: 4,
                  left: 74,
                  height: 20,
                  width: 20,
                  tintColor: 'red',
                  marginTop: -10,
                  marginLeft: 250,
                }}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black'}}>Name: {item.name}</Text>
            </View>
            <Text style={{color: 'black'}}>Age: {item.age}</Text>
          </View>
        ))}
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: '600',
          backgroundColor: 'blue',
          borderRadius: 5,
          paddingVertical: 10,
          marginTop: 20,
        }}>
        Pay Now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
  },
  bookingBox: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
  },
});

export default BookingForm;
