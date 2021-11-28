import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Title, Button } from 'react-native-paper';

export default ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: Colors.black
    }
  });

  const logoutHandler = () => {
    navigation.navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Account Screen</Title>
      <Button onPress={logoutHandler}>Logout</Button>
    </View>
  )
}
