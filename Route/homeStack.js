import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Add from '../src/addData'
import ViewData from '../src/viewData'
import Update from '../src/updateData'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name={"AddVerse"} component={Add} />
        <Stack.Screen name={"ViewData"} component={ViewData} />
        <Stack.Screen name={"Update"} component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router