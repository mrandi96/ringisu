import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import ADIcons from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';

import ContactNavigation from './ContactNavigation';
import ScheduleNavigation from './ScheduleNavigation';
import { USER_CREDENTIALS } from '../appConfig';

const Tab = createMaterialBottomTabNavigator();

export default ({ navigation, darkMode, setDarkMode }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    barStyle: {
      backgroundColor: colors.barColor,
      color: colors.barIcon,
    },
  });

  const tabPress = () => {
    AsyncStorage.getItem(USER_CREDENTIALS).then(token => {
      if (!token) {
        navigation.navigate('Landing');
      }
    });
  };

  const listeners = { tabPress };

  useEffect(() => {
    AsyncStorage.getItem(USER_CREDENTIALS).then(token => {
      if (!token) {
        navigation.navigate('Landing');
      }
    });
  });

  return (
    <Tab.Navigator
      shifting
      barStyle={styles.barStyle}
      activeColor={colors.barIcon}
      inactiveColor={colors.barIcon2}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        listeners={listeners}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleNavigation"
        component={ScheduleNavigation}
        listeners={listeners}
        options={{
          tabBarIcon: ({ color }) => (
            <Icons name="clock-time-four" color={color} size={26} />
          ),
          tabBarLabel: 'Schedule',
        }}
      />
      <Tab.Screen
        name="ContactNavigation"
        component={ContactNavigation}
        listeners={listeners}
        options={{
          tabBarIcon: ({ color }) => (
            <ADIcons name="contacts" color={color} size={26} />
          ),
          tabBarLabel: 'Contact',
        }}
      />
      <Tab.Screen
        name="Account"
        children={props => (
          <AccountScreen
            {...props}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        )}
        listeners={listeners}
        options={{
          tabBarIcon: ({ color }) => (
            <Icons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
