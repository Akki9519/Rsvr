import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import uuid from 'react-native-uuid';
import {userData} from '../dummydata/userData';

export default function SignUpScreen({navigation, route}: any) {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (text: any) => {
    console.log('text', text);
    const inputValue = text;
    setEmail(inputValue);
    setIsValid(validateEmail(inputValue));
  };
  const callHandleSubmitWithoutServer = () => {
    const data: any = {
      name: name,
      email: email,
      number: number,
      password: password,
    };
    userData.push(data);
    navigation.navigate('Login');
  };
  const callHandleSubmit = () => {
    const data = {
      uuid: uuid.v4(),
      email: email,
      name: name,
      password: password,
      contact: number,
      confirmpassword: confirmPassword,
    };
    console.log(data, 'data');

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://10.0.2.2:4000/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setName('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const isDisabled =
    !email ||
    !password ||
    !number ||
    !name ||
    name.length < 3 ||
    name.length > 30 ||
    !confirmPassword ||
    password.length < 8 ||
    password !== confirmPassword;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.logoContainer}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/kullu.png')}
            style={{width: 200, height: 180, borderRadius: 8}}
          />
        </View>
      </SafeAreaView>

      <View style={styles.formContainer}>
        <View>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              fontFamily: 'serif',
              fontWeight: '800',
              marginBottom: 20,
              fontSize: 20,
            }}>
            Signup in RSVR Tech
          </Text>
        </View>
        <View style={styles.form}>
          <View>
            {name?.length < 0 ? (
              <TextInput
                style={styles.input}
                placeholder="Full Name*"
                value={name}
              />
            ) : (
              <TextInput
                style={styles.input}
                placeholder="Full Name*"
                value={name}
                onChangeText={text => setName(text)}
              />
            )}
            {name && name.length < 3 && (
              <Text>Name needs to be atleast 3 characters long</Text>
            )}
          </View>

          <View>
            {email?.length < 0 ? (
              <TextInput
                style={styles.input}
                placeholder="Email Address*"
                value={email}
              />
            ) : (
              <TextInput
                style={styles.input}
                placeholder="Email Address*"
                value={email}
                onChangeText={text => handleInputChange(text)}
              />
            )}
            {!isValid && <Text>Invalid email address</Text>}
          </View>

          {contact?.length > 0 ? (
            <TextInput
              style={styles.input}
              placeholder="Number*"
              value={contact}
              editable={false}
            />
          ) : (
            <TextInput
              style={styles.input}
              placeholder="Number*"
              value={number}
              onChangeText={text => setNumber(text)}
            />
          )}

          <View>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password*"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            {password && password.length < 8 && (
              <Text>Passwords needs to be atleast 8 characters long</Text>
            )}
          </View>

          <View>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder=" Confirm Password*"
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
            {password !== confirmPassword && (
              <Text>Passwords does not match</Text>
            )}
          </View>
          {isSubmitted && <Text>Sign up successful!</Text>}
          {isSubmitError && (
            <Text>
              Something went wrong!! Given email address or Contact Number
              already exists!{' '}
            </Text>
          )}
          {isDisabled === true ? (
            <TouchableOpacity
              style={styles.disableButtonContainer}
              onPress={() => {
                callHandleSubmitWithoutServer();
              }}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                callHandleSubmitWithoutServer();
              }}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.bottomText}>or continue with</Text>
        <View style={styles.a}></View>
        <View style={styles.d}>
          <Text style={styles.e}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.f}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
  },
  logo: {
    width: 280,
    height: 180,
  },
  formContainer: {
    flex: 1,

    paddingHorizontal: 32,
    paddingTop: 16,
    borderRadius: 50,
    marginHorizontal: 4,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headingText: {fontSize: 30, color: '#f2f8fd', fontWeight: 'bold'},
  form: {paddingTop: 16},
  label: {color: '#f2f8fd', marginLeft: 16, marginBottom: 2},
  input: {
    padding: 10,
    color: 'black',
    backgroundColor: 'lightgray',
    borderRadius: 12,
    marginBottom: 12,
  },
  forgotButton: {display: 'flex', alignItems: 'flex-end'},
  forgotText: {marginBottom: 20, color: '#f2f8fd'},
  buttonContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 16,
    backgroundColor: '#000000',
    marginTop: 12,
  },
  disableButtonContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 16,
    backgroundColor: 'darkblue',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  bottomText: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'black',
    paddingTop: 10,
    paddingBottom: 20,
  },
  a: {flexDirection: 'row', justifyContent: 'center'},
  b: {padding: 8, borderRadius: 16, backgroundColor: 'white'},
  c: {width: 40, height: 40},
  d: {
    flexDirection: 'row',
    justifyContent: 'center',

    paddingBottom: 12,
  },
  e: {color: 'black', fontWeight: 'normal'},
  f: {fontWeight: 'bold', color: 'red'},
  g: {
    textAlign: 'center',
    backgroundColor: 'blue',
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 90,
    alignItems: 'center',
    marginLeft: 35,
    height: 40,
    paddingTop: 10,
    color: 'white',
    marginTop: 10,
  },
});
