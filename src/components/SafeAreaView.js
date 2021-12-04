import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

export default props => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight || 0,
    },
  });
  return <View {...props} style={{ ...props.style, ...styles.container }} />;
};
