import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { Title } from 'react-native-paper';
import View from '../components/SafeAreaView';
import { USER_CREDENTIALS } from '../appConfig';

export default ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const [refreshing, setRefreshing] = useState(false);
  const [name, setName] = useState('Kuuhaku');

  const getUserData = async () => {
    try {
      const raw = await AsyncStorage.getItem(USER_CREDENTIALS);
      if (raw) {
        const data = JSON.parse(raw);
        const { displayName = '', firstName = '', lastName = '' } = data;
        setName(`${displayName}\nFirst: ${firstName}\nLast: ${lastName}`);
      } else {
        navigation.navigate('Landing');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setRefreshing(false);
    }
  };

  const refreshHandler = () => {
    setRefreshing(true);
    setTimeout(() => {
      getUserData();
    }, 1000);
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />
      }
      style={styles.container}>
      <View style={styles.innerContainer}>
        <Title style={styles.text}>Welcome</Title>
        <Title style={styles.text}>{name}</Title>
      </View>
    </ScrollView>
  );
};
