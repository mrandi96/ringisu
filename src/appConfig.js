import { Colors, DefaultTheme } from 'react-native-paper';

const androidClientId =
  '20517291208-h59ap69ee449bevcdg7ojn9j4r4adikc.apps.googleusercontent.com';
const iosClientId =
  '20517291208-bfdr7518agt1g5v83elb8lg9k2r0hb52.apps.googleusercontent.com';
const USER_CREDENTIALS = '@ringisuUserCredentials';
const DARK_MODE = '@darkMode';

const themeBuilder = ({
  primary = Colors.blue100,
  accent = Colors.white,
  text = Colors.black,
  onSurface = Colors.amberA400,
  barIcon = Colors.amberA400,
  barIcon2 = Colors.grey500,
  barColor = Colors.grey800,
  onPrimary = Colors.white,
}) => ({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
    accent,
    text,
    onSurface,
    barIcon,
    barIcon2,
    barColor,
    onPrimary,
  },
});

const LightTheme = themeBuilder({
  primary: Colors.amberA400,
  onPrimary: Colors.black,
  barIcon: Colors.black,
  barIcon2: '#444444',
  barColor: Colors.amberA400,
});

const DarkTheme = themeBuilder({
  primary: Colors.grey800,
  onPrimary: Colors.white,
  barIcon: Colors.amberA400,
  barIcon2: Colors.grey500,
  barColor: Colors.grey800,
});

export {
  androidClientId,
  iosClientId,
  LightTheme,
  DarkTheme,
  USER_CREDENTIALS,
  DARK_MODE,
};
