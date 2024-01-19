import {StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Search from '../component/Search';
import LatestTour from '../component/LatestTour'
import { Tour} from '../dummydata/Tour';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreee({navigation}:any) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleLogout = async () => {
   
    await AsyncStorage.clear(); 

    navigation.navigate('Login');
  };

  return (
    <>
   <ScrollView>
      <View style={styles.a}>
        <View style={{margin:5}}>
          <Image
            source={require('../assets/images/kullu.png')}
            style={{height: 100, width: 120}}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight:'700',fontFamily:'serif',marginTop:32,color:'gray',marginLeft:-20}}>Hello Akash!</Text>
          <Text style={{marginLeft:-20}}>RSVR</Text>
        </View>



<View >
    
      <TouchableOpacity onPress={toggleModal}>
        {/* Add your PNG icon component here */}
        <View style={{}}>
        <Image source={require("../assets/images/icons/menu-bar.png")} style={{height:30 ,width:30 ,marginLeft:120,marginTop:35}} />
        </View>
      </TouchableOpacity>


     
      <Modal isVisible={isModalVisible} >
       
        <View style={{ height:100,width:100,backgroundColor:"white",borderRadius:8,flexDirection:'column',marginBottom:600,marginLeft:250 }}>
         
         <View style={{flexDirection:'row',marginTop:10}}>
          <Image source={require("../assets/images/icons/user.png")} style={{height:20,width:20,margin:11}} />
     
          <Text style={{color:"black",paddingTop:10,marginLeft:-7}} >Akash</Text>
          
          
          <TouchableOpacity onPress={toggleModal}>
            <Image source={require("../assets/images/icons/icons8-cross-50.png")} style={{height:20,width:20,marginTop:-4,marginLeft:4}}/>
          </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleLogout}>
          <View style={{flexDirection:"row",marginLeft:8}}>
          <Image source={require("../assets/images/icons/icons8-logout-48.png")} style={{height:20,width:20,marginLeft:4}}/>
          <Text style={{fontWeight:"900",marginLeft:2}}>Logout</Text>
          </View>
          </TouchableOpacity>
          </View>
          
      </Modal>



    </View>

      </View>
      <Search />
      <View style={{marginTop: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{paddingLeft:20,fontWeight:'700',color:'red',margin:8,fontSize:18,marginBottom:20}}>Please Select the Latest Tour Package!!!</Text>
    
        </View>
      </View>

    <View>
   
    </View>
   
    <View>
     <LatestTour list={Tour}/>
    </View>
   
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  a: {
    flexDirection: 'row',
    backgroundColor:'white',
    

  },
});
