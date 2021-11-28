import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Title, Text, IconButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Entypo';

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
      marginTop: 15
    },
    text: {
      color: Colors.black
    }
  });

  const loginHandler = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Welcome to Ringisu</Title>
      <Text style={styles.text}>Tap one of these platforms below to login</Text>
      <View style={styles.logoContainer}>
        <IconButton
          icon="google"
          size={36}
          color={Colors.black}
          onPress={loginHandler}
        />
        <IconButton
          icon={() => <Icons name="facebook" size={36} color={Colors.black} />}
          size={36}
          color={Colors.black}
          onPress={loginHandler}
        />
        <IconButton
          icon="twitter"
          size={36}
          color={Colors.black}
          onPress={loginHandler}
        />
      </View>
    </View>
  )
}
