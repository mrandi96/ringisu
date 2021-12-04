import React from 'react';
import { Button, useTheme } from 'react-native-paper';

export default props => {
  const { colors } = useTheme();
  return (
    <Button
      {...props}
      labelStyle={{ color: colors.onPrimary }}
      mode="contained"
    />
  );
};
