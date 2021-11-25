import React from 'react';
import { View, KeyboardAvoidingView, Image,  Text, StyleSheet,} from 'react-native';
  

export default function contruçao() {

    return (

        <KeyboardAvoidingView style={styles.background}>

        <View style={styles.container}>
            <Text style={styles.Text1}>Página em Construção</Text>
        </View>

        <View style={styles.container}>
            <Image style={styles.img1} source={require('../assets/constru.png')}/>
        </View>


        </KeyboardAvoidingView>
    )  
    }

const styles = StyleSheet.create({
 
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F8F8FF',
    
  },

  container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#F8F8FF',
  },
    
  Text1:{
    textAlign: 'center',
    fontSize:60,
    color:'#000000',
  },

})