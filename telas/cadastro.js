import React from 'react';
import {View, KeyboardAvoidingView,  TextInput, StyleSheet,} from 'react-native';
import { TouchableOpacity, Text} from 'react-native';
  

export default function cadastro() {


  return (

    

    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container1}>
        <Text style={styles.Text1}> Cadastro de Usuário</Text>
      </View> 
        
      <View style={styles.container}>
          
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          autoCorrect={false}
          onChangeText={value => setPassword(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={value => setPassword(value)}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress ={() => entrar()}>
          <Text style={styles.TextSubmit}>ENVIAR</Text>
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

  container1:{
    flex:0.3,
    alignContent: 'center',
    justifyContent: 'center',
    width: "80%",
    backgroundColor: "black",
    borderRadius: 7,
    marginTop:50,
    alignItems:'center',
  
  },

  input:{
    backgroundColor:"#FFF",
    width: '80%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius:7,
    padding:10,
  },
  
  btnSubmit1:{
    backgroundColor:'gray',
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

  Text1: {
    color: '#F8F8FF',
    fontSize:40,
    textAlign: "center",
    marginTop:60,
    },

  btnRegistro: {
    marginTop:20,
    justifyContent: 'center',
    },
 
  RegistroText: {
    color: '#FFF',
    }

})