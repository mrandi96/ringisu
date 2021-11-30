import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  // Card,
  // Avatar,
  // Colors,
  TouchableRipple,
  Title,
} from 'react-native-paper';

export default ({ name, onPress, ...props }) => {
  const styles = StyleSheet.create({
    container: {
      paddingLeft: 10,
      paddingVertical: 10,
      backgroundColor: 'white',
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
    },
  });

  // const [color, setColor] = useState('amber');
  // const [label, setLabel] = useState('0');

  // const getLabel = useCallback(() => {
  //   const [firstName, lastName] = name.split(' ');
  //   setLabel(
  //     `${firstName.charAt(0)}${
  //       lastName ? lastName.charAt(0) : ''
  //     }`.toUpperCase(),
  //   );
  // }, [name]);

  // useEffect(() => {
  //   getLabel();
  //   const colorTypes = [
  //     'amber',
  //     'lime',
  //     'indigo',
  //     'teal',
  //     'cyan',
  //     'brown',
  //     'pink',
  //     'teal',
  //   ];
  //   const [first, second = 'z'] = label.split('');
  //   const asciiCode = +first.codePointAt(0) + +second.codePointAt(0);
  //   setColor(colorTypes[asciiCode % (colorTypes.length + 1)]);
  // }, [label, getLabel]);

  return (
    // <Card {...props}>
    //   <TouchableRipple rippleColor={Colors.grey500} onPress={onPress}>
    //     <Card.Title
    //       title={name}
    //       left={() => (
    //         <Avatar.Text
    //           label={label}
    //           size={39}
    //           style={{ backgroundColor: Colors[`${color}400`] }}
    //         />
    //       )}
    //     />
    //   </TouchableRipple>
    // </Card>
    <TouchableRipple style={styles.container} onPress={onPress}>
      <View>
        <Title>{name}</Title>
      </View>
    </TouchableRipple>
  );
};
