import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar, useTheme } from 'react-native-paper';

export default props => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      borderRadius: 0,
    },
    inputStyle: {
      color: colors.onPrimary,
    },
  });
  return (
    <Searchbar
      {...props}
      style={{ ...props.style, ...styles.container }}
      inputStyle={styles.inputStyle}
      placeholderTextColor={colors.barIcon2}
      iconColor={colors.onPrimary}
    />
  );
};
