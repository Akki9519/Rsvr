import {Image, StyleSheet, Text, View ,TextInput,Dimensions} from 'react-native'
import React,{useState} from 'react'
export default function SignIn({navigation}:any) {
  const [number, setNumber] = useState<string>("");
  return (
   
    <>
    <View style={{flex:1 ,backgroundColor:"white"}}>
      <View style={{alignItems:"center"}}>
      <Image source={require("../assets/images/kullu.png")} style={{height:200, width:200}}/>
      </View>
     
        <View>
            <Text style={{color:"red",textAlign:"center",fontFamily:"serif",fontWeight:"800",marginTop:40,marginBottom:60,fontSize:20}}>Forgot Password!</Text>
        </View>
        <View style={{marginHorizontal:20}}>
        <View style={{alignItems:"stretch",backgroundColor:"lightgray",borderRadius:8,paddingHorizontal:10,margin:20}}>
          <TextInput  placeholder='Enter The Number'  value={number}
                        onChangeText={(text) => setNumber(text)} ></TextInput>
        </View>
        </View>
      
        <View style={styles.buttonContainer}>
         <Text style={styles.buttonText} onPress={()=>navigation.navigate("Signup")}>Reset Password</Text>
        </View>
   
        </View>
   </>
   
  )
}

const styles = StyleSheet.create({
  c:{
    textAlign:"center",
    backgroundColor:"blue",
    width:Dimensions.get('window').width*0.6,
    borderRadius:90,
    alignItems:"center",
    marginLeft:15,
    height:40,
    paddingTop:10,
    color:"white",
    marginTop:10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
   
  },
  buttonContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 14,
    backgroundColor: 'darkblue',
    marginHorizontal:40,
    marginTop:10
  },
})