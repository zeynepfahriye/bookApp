import React from 'react'
import { Home , BookDetail } from './screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native'
import Tab from './navigation/Tab'

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent"
  }
}

const Stack =createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      initialRouteName={Home}
      >
      {/*Tabs*/}
      <Stack.Screen
        name='Home' component={Tab}
      />
      {/*SCEENS */}
      <Stack.Screen name='BookDetail' component={BookDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;