import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet } from 'react-native';
import { Title, Button, Snackbar, Switch, Text } from 'react-native-paper';
import GoogleSignIn from 'expo-google-sign-in';
import { USER_CREDENTIALS } from '../appConfig';

export default ({ navigation, darkMode, setDarkMode }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    formInput: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingLeft: 5,
      borderWidth: 1,
      borderRadius: 7,
      marginVertical: 5,
    },
  });

  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('test');

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const logoutHandler = () => {
    AsyncStorage.removeItem(USER_CREDENTIALS)
      .then(async () => {
        if (!__DEV__) {
          await GoogleSignIn.signOutAsync();
        }
        navigation.navigate('Landing');
      })
      .catch(e => {
        console.error(e);
        let err = 'error';
        if (typeof e === 'string') {
          err = e;
        } else if (e) {
          err = e.message;
        }
        setError(err);
        setVisible(true);
      });
  };

  return (
    <View style={styles.container}>
      <Title>Account Screen</Title>
      <View style={styles.formInput}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} color="black" />
      </View>
      <Button onPress={logoutHandler} mode="contained">
        Logout
      </Button>
      <Button onPress={() => navigation.navigate('Landing')} mode="contained">
        Logout #2
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        action={{
          label: 'OK',
          onPress: () => {
            setVisible(false);
          },
        }}>
        {error}
      </Snackbar>
    </View>
  );
};
