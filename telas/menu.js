import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text, } from 'react-native';


 

export default function menu({navigation}) {

  const construçao = () => {
    navigation.navigate ("construçao")
    }

  const digital = () => {
    navigation.navigate ("digital")
    }
  const sair = () => {
    navigation.navigate ("login")
    }
    

  return (
    

    <KeyboardAvoidingView style={styles.background}>
        <View>
           <Text style={styles.Text2} >AIKON</Text>     
        </View>

      <View style={styles.container}>

          <View>
            <Text style={styles.Text1}>MENU</Text>     
          </View>

          <TouchableOpacity style={styles.btnSubmit}
            onPress ={() => construçao()}>
              <Text style={styles.TextSubmit}>Perfil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnSubmit}
            onPress ={() => construçao()}>
              <Text style={styles.TextSubmit}>Solicitar Ferias</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit}
            onPress ={() => construçao()}>
              <Text style={styles.TextSubmit}>Solicitar Abono</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnSubmit}
            onPress ={() => construçao()}>
              <Text style={styles.TextSubmit}>Cadastrar Curso</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit}
            onPress ={() => construçao()}>
              <Text style={styles.TextSubmit}>Contra-Cheque</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit}
            onPress ={() => construçao()}>
              <Text style={styles.TextSubmit}>Câmera</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnSubmit}
            onPress ={() => digital()}>
              <Text style={styles.TextSubmit}>Registro de Ponto</Text>
            </TouchableOpacity>
          
          </View>
          <View>
          <TouchableOpacity style={styles.btnSubmit2}
            onPress ={() => sair()}>
              <Text style={styles.TextSubmit}>SAIR</Text>
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
    backgroundColor:'#363636',
  },

  container:{
    flex:0.9,
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 10,
    paddingBottom: 10,
    backgroundColor:"black",
    borderRadius:15,
    alignItems: 'center',
  },
 
  btnSubmit:{
    backgroundColor: '#808080',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop:20,
  },

  btnSubmit2:{
    
    width: '80%',
    height: 45,
    alignItems: 'center',
    marginTop:15,
  },

  TextSubmit: {
    color: '#FFF',
    fontSize:18,
  },
 
  Text1: {
    fontSize: 20,
    color: '#F8F8FF',
    textAlign: "left",
    marginTop:10,
  },

  Text2: {
    fontSize: 60,
    color: '#F8F8FF',
    textAlign: "center",
    marginTop:10,
  },
 
 
})