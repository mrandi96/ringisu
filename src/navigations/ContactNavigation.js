import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../screens/ContactScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';
import { Colors } from 'react-native-paper';

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Contact">
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.name,
          headerStyle: {
            backgroundColor: Colors.amberA400,
          },
        })}
        name="ContactDetail"
        component={ContactDetailScreen}
      />
    </Stack.Navigator>
  );
};
