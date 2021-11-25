import React from 'react';
import  { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './telas/login';
import menu from './telas/menu';
import digital from './telas/digital';
import construçao from './telas/construçao';
import cadastro from './telas/cadastro';



const Stack = createStackNavigator();



export default function App() {
 return (   
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="menu" component={menu} />
        <Stack.Screen name="digital" component={digital} />
        <Stack.Screen name="construçao" component={construçao} />
        <Stack.Screen name="cadastro" component={cadastro} />
      </Stack.Navigator>
    </NavigationContainer> 
  
  )
}