import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet } from 'react-native';
import { Colors, Title, Button, Snackbar } from 'react-native-paper';
import GoogleSignIn from 'expo-google-sign-in';
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

  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const logoutHandler = async () => {
    if (!__DEV__) {
      await GoogleSignIn.signOutAsync();
    }
    AsyncStorage.removeItem(USER_CREDENTIALS)
      .then(() => {
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
      });
  };

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Account Screen</Title>
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
