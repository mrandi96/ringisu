import React, { useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Colors, Title, FAB } from 'react-native-paper';
import Button from '../components/Button';
import * as Calendar from 'expo-calendar';

export default ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: Colors.black,
    },
    newAppointment: {
      position: 'absolute',
      right: 20,
      bottom: 10,
      backgroundColor: Colors.amber400,
    },
  });

  const getCalenderEvents = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {
      const calendars = await Calendar.getCalendarsAsync(
        Calendar.EntityTypes.EVENT,
      );
    }
  };

  const getDefaultCalendarSource = async () => {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  };

  const createNewSchedule = async () => {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  };

  useEffect(() => {
    getCalenderEvents();
  });

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Schedule Screen</Title>
      <Button
        onPress={() =>
          navigation.navigate('ScheduleDetail', {
            date: new Date().toLocaleDateString(),
          })
        }
        mode="contained">
        Schedule New Appointment
      </Button>
      <FAB
        style={styles.newAppointment}
        icon="plus"
        onPress={() =>
          navigation.navigate('ScheduleDetail', {
            date: new Date().toLocaleDateString(),
          })
        }
      />
    </View>
  );
};
