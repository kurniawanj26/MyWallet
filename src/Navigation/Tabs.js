import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ActivityScreen from '../Screens/ActivityScreen';
import WalletScreen from '../Screens/WalletScreen';
import TransactionsScreen from '../Screens/TransactionsScreen';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconChart from 'react-native-vector-icons/MaterialIcons';
import IconBox from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

const Tabs = () => {

  const FloatingHomeButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={[styles.floatingIconItemContainer, { ...styles.shadow }]}
      onPress={onPress}
    >
      <View style={styles.floatingIconItem}>
        {children}
      </View>
    </TouchableOpacity>
  )

  const FloatingIcon = focused => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <IconBox name='checkbox-blank-outline' size={15} color={focused ? '#363062' : 'grey'} />
        <IconBox name='checkbox-blank-outline' size={15} color={focused ? '#363062' : 'grey'} />
      </View>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 43,
          elevation: 0,
          borderRadius: 16,
          left: 28,
          right: 28,
          ...styles.shadow,
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name='WalletScreen'
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name='credit-card' size={25} color={focused ? '#363062' : 'grey'} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='TransactionsScreen'
        component={TransactionsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <FloatingIcon focused={focused} />
              <FloatingIcon focused={focused} />
            </>
          ),
          tabBarButton: (props) => (<FloatingHomeButton {...props} />)
        }}
      />
      <Tab.Screen
        name='ActivityScreen'
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <IconChart name='bar-chart' size={25} color={focused ? '#363062' : 'grey'} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  iconContainer: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  floatingIconItemContainer: {
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingIconItem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
})