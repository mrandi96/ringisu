import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import LandingNavigation from './LandingNavigation';

const Stack = createStackNavigator();
export default ({ darkMode, setDarkMode }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        children={props => (
          <BottomTabNavigation
            {...props}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        )}
      />
      <Stack.Screen name="Landing" component={LandingNavigation} />
    </Stack.Navigator>
  );
};
