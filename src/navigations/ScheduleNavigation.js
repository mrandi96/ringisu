import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from '../screens/ScheduleScreen';
import ScheduleDetailScreen from '../screens/ScheduleDetailScreen';
import { Colors } from 'react-native-paper';

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Schedule">
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen
        options={({ route }) => ({
          headerShown: true,
          headerTitle: 'Schedule Detail',
          headerStyle: {
            backgroundColor: Colors.amberA400,
          },
        })}
        name="ScheduleDetail"
        component={ScheduleDetailScreen}
      />
    </Stack.Navigator>
  );
};
