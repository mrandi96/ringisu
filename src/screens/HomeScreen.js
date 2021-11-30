import React, { useState, useEffect, useLayoutEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet } from 'react-native';
import { Colors, Title } from 'react-native-paper';
import { USER_CREDENTIALS } from '../appConfig';

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
  });

  const [name, setName] = useState('Kuuhaku');

  useEffect(() => {
    AsyncStorage.getItem(USER_CREDENTIALS)
      .then(raw => {
        const json = JSON.parse(raw);
        if (json) {
          const { displayName = '', firstName = '', lastName = '' } = json;
          setName(displayName);
        }
      })
      .catch(e => {
        console.error(e);
      });
  }, [navigation]);

  useLayoutEffect(() => {
    // TODO: nothing
  });

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Welcome</Title>
      <Title style={styles.text}>{name}</Title>
    </View>
  );
};
