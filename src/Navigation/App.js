import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActivityScreen from '../Screens/ActivityScreen';
import WalletScreen from '../Screens/WalletScreen';
import StatementScreenFirst from '../Screens/StatementScreenFirst';
import StatementScreenSecond from '../Screens/StatementScreenSecond';
import TransactionsScreen from '../Screens/TransactionsScreen';
import AddWalletScreen from '../Screens/AddWalletScreen';
import Tabs from './Tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator()

const Tab = () => {
  return (
    <Tabs />
  )
}

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Tab' component={Tab} />
          <Stack.Screen name='ActivityScreen' component={ActivityScreen} />
          <Stack.Screen name='WalletScreen' component={WalletScreen} />
          <Stack.Screen name='StatementScreenFirst' component={StatementScreenFirst} />
          <Stack.Screen name='StatementScreenSecond' component={StatementScreenSecond} />
          <Stack.Screen name='TransactionsScreen' component={TransactionsScreen} />
          <Stack.Screen name='AddWalletScreen' component={AddWalletScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

