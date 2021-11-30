import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

export default ({ route, navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const { name, phoneNumbers = [] } = route.params;

  return (
    <View style={styles.container}>
      <Title>{name}</Title>
      <Title>
        {phoneNumbers.length ? phoneNumbers[0].number : 'No number registered.'}
      </Title>
    </View>
  );
};
