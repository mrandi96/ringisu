import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import ADIcons from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ContactScreen from '../screens/ContactScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

export default () => {
  const styles = StyleSheet.create({
    barStyle: {
      backgroundColor: Colors.amberA400,
    },
  });

  return (
    <Tab.Navigator
      shifting
      barStyle={styles.barStyle}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icons name="clock-time-four" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ADIcons name="contacts" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}