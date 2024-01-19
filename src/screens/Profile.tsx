import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function Profile() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState('');
  const [userID, setUserID] = useState('');
  const [isEditVisible, setIsEditVisible] = useState(false);

  const EditUserDetail = async () => {
    setIsEditVisible(true);
  };
  const handleUpdate = () => {
    const data = {name: name, contact: contact, email: email};
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8081/update',
      headers: {'Content-Type': 'application/json'},
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setIsEditVisible(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getData = async () => {
      const currentUserID: any = await AsyncStorage.getItem('uuid');
      console.log('current user id here', currentUserID);
      let userID = currentUserID;
      userID = userID.replace(/^"(.+(?="$))"$/, '$1');
      let name: any = await AsyncStorage.getItem('name');
      name = name.replace(/^"(.+(?="$))"$/, '$1');
      let email: any = await AsyncStorage.getItem('email');
      email = email.replace(/^"(.+(?="$))"$/, '$1');
      let contact: any = await AsyncStorage.getItem('contact');
      contact = contact.replace(/^"(.+(?="$))"$/, '$1');
      setUserID(userID);
      setName(name);
      setEmail(email);
      setContact(contact);
    };
    getData();
  }, []);
  return (
    <>
     
        <View style={styles.container}>
          <SafeAreaView style={styles.logoContainer}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/images/kullu.png')}
                style={{width: 150, height: 150, marginTop: 320}}
              />
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 32,
                  fontWeight: 'bold',
                  marginBottom: 50,
                  color:"black"
                }}>
                My Profiles
              </Text>
              <View style={styles.input}>
                <TextInput style={{fontWeight:"600"}}>{name}</TextInput>
              </View>
              <View style={styles.input}>
                <TextInput style={{fontWeight:"600"}}>{email}</TextInput>
              </View>
              <View style={styles.input}>
                <TextInput style={{fontWeight:"600"}}>{contact}</TextInput>
              </View>
              <View
                style={{
                  marginHorizontal: 100,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      height: 40,
                      backgroundColor: 'darkblue',
                      paddingHorizontal: 80,
                      borderRadius: 10,
                      paddingTop: 8,
                      fontSize: 16,
                      marginTop: 17,
                      color:"white"
                    }}
                    onPress={() => EditUserDetail()}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>

              <Modal visible={isEditVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                  <View style={styles.dialogContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Name"
                      value={name}
                      onChangeText={text => setName(text)}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      value={email}
                      onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Contact"
                      value={contact}
                      onChangeText={text => setContact(text)}
                    />

                    <Button  title="Update" onPress={handleUpdate}  />
                    <View style={{marginTop:10}}>
                    <Button 
                      title="Cancel"
                      onPress={() => setIsEditVisible(false)}
                    />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View></View>
          </SafeAreaView>
        </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  logo: {
    width: 280,
    height: 180,
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 12,
    marginBottom: 20,
    width: 280,
    paddingLeft: 14,
    color:"black",
    height: 50,
 
   
    
    
  },
  output: {
    borderRadius: 12,
    marginBottom: 20,
    width: 250,
    paddingLeft: 14,
    marginRight: 30,
    height: 50,
    paddingTop: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  dialogContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    
  },
});
