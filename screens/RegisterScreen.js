import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Title } from 'react-native-paper';

export default () => {
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

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Register Screen</Title>
    </View>
  )
}
