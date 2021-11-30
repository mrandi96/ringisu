import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

export default ({ route }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Title>{route.params.date}</Title>
    </View>
  );
};
