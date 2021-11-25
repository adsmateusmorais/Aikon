
import React from 'react';
import {View, KeyboardAvoidingView, Text,  Image, StyleSheet,} from 'react-native';

  

export default function digital() {


  return (

    

    <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.Text1}>REGISTRO DE PONTO</Text>
            <Image style={styles.img1} source={require('../assets/digital.png')}/>
            <Text style={styles.Text1}>Leitor de Digital</Text>
        </View>

           

    </KeyboardAvoidingView>
  )  
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
  },
  
  container:{
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 10,
    alignItems:'center',
  },

  Text1:{
    alignContent: 'center',
    justifyContent: 'center',
    textAlign:'center',
    fontSize:60,
    color:'#F8F8FF',
    margin:10
    },

    img1:{
      alignItems:'center',
      marginTop: 10,
    },

})
