import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, Title, Text, IconButton, Snackbar } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Entypo';

import * as GoogleSignIn from 'expo-google-sign-in';
import { androidClientId, iosClientId, USER_CREDENTIALS } from '../appConfig';

export default ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.amberA400,
    },
    logoContainer: {
      flexDirection: 'row',
      marginTop: 15,
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

  const loginHandler = () => {
    navigation.navigate('Home');
  };

  const getUserDetails = async () => {
    try {
      const userDetails = await GoogleSignIn.signInSilentlyAsync();
      await AsyncStorage.setItem(USER_CREDENTIALS, JSON.stringify(userDetails));
    } catch (e) {
      console.error(e);
    }
  };

  const initAsync = async () => {
    try {
      await GoogleSignIn.initAsync({
        clientId: Platform.OS === 'ios' ? iosClientId : androidClientId,
      });
      getUserDetails();
    } catch (e) {
      console.error(e);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        initAsync();
        loginHandler();
      } else {
        console.error('Google sign in cancelled.');
      }
    } catch (e) {
      let err = 'error';
      if (typeof e === 'string') {
        err = e;
      } else if (e) {
        err = e.message;
      }
      setError(err);
      console.error(e);
    }
  };

  const handleFacebookSignIn = () => {
    try {
      const user = {
        displayName: 'Kuuhaku #2',
        firstName: 'Kuuhaku',
        lastName: '#2',
      };

      AsyncStorage.setItem(USER_CREDENTIALS, JSON.stringify(user)).then(() => {
        loginHandler();
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Welcome to Ringisu</Title>
      <Text style={styles.text}>Tap one of these platforms below to login</Text>
      <View style={styles.logoContainer}>
        <IconButton
          icon="google"
          size={36}
          color={Colors.black}
          onPress={handleGoogleSignIn}
        />
        <IconButton
          icon={() => <Icons name="facebook" size={36} color={Colors.black} />}
          size={36}
          color={Colors.black}
          onPress={handleFacebookSignIn}
        />
        <IconButton
          icon="twitter"
          size={36}
          color={Colors.black}
          onPress={async () => {
            await AsyncStorage.removeItem(USER_CREDENTIALS);
            loginHandler();
          }}
        />
      </View>
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
