import React, { useState } from 'react';
import {  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet,} from 'react-native';
import cadastro from './cadastro';

export default function login({navigation}) {

  const [ email, setEmail] = useState(null)
  const [ password, setPassword] = useState(null)

  //declara esse codigo para fazer transiçao entre telas sem o botao de voltar
  const entrar = () => {
    navigation.reset({
      index:0,
      routes: [{name:"menu"}]
    })
    
  const cadastro = () => {
    navigation.navigate ("cadastro")
     }
      
      
    
   
    /* 
    este é um teste para saber se a funçao estava correta. ele imprime no terminal 
    console.log("entrou")
    console.log(email)
    console.log(password)*/
  }

  return (

    <KeyboardAvoidingView style={styles.background}>

          <View style={styles.containerlogo}>
            <Image 
            source={require('../assets/aikon.png')}/>
          </View>

          <View style={styles.container}>
              
              <TextInput
              style={styles.input}
              placeholder="email"
              autoCorrect={false}
              onChangeText={value => setEmail(value)}
              keyboardType ="email-address"
              />

              <TextInput
              style={styles.input}
              placeholder="password"
              autoCorrect={false}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
              />

              <TouchableOpacity style={styles.btnSubmit} onPress ={() => entrar()}>
                <Text style={styles.TextSubmit}>Acessar</Text>
              </TouchableOpacity>

          </View>

          <View style={styles.container3}>
              <TouchableOpacity style={styles.btnSubmit1} onPress ={() => cadastro()}>
                <Text style={styles. TextSubmit1}>Criar conta</Text>
              </TouchableOpacity>
          </View>
      
    </KeyboardAvoidingView>
  )  
}

const styles = StyleSheet.create({
  
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },

  containerlogo:{
    flex:0.7,
    justifyContent:'center',
    marginTop:50,
    alignItems: 'center',
    },

  container3:{
    flex:0.2,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor:"black",
  },

  container:{
    flex:0.7,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor:"black",
  },

  input:{
    backgroundColor:"#FFF",
    width: '80%',
    marginBottom: 15,
    color: 'black',
    fontSize: 17,
    borderRadius:7,
    padding:10,
  },

  btnSubmit1:{
    backgroundColor: '#363636',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  TextSubmit: {
    color: '#FFF',
    fontSize:18,
  },

  TextSubmit1: {
    color: '#FFF',
    fontSize:18,
  },

})