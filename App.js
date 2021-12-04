import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigation from './src/navigations/MainNavigation';
import { LightTheme, DarkTheme, DARK_MODE } from './src/appConfig';

export default function App() {
  const [theme, setTheme] = useState(LightTheme);
  const [darkMode, setDarkMode] = useState(false);

  const getDarkModeState = async () => {
    const darkState = await AsyncStorage.getItem(DARK_MODE);
    setDarkMode(JSON.parse(darkState));
  };

  const setDarkModeState = async () => {
    const darkModeState = darkMode;
    setDarkMode(!darkModeState);
    AsyncStorage.setItem(DARK_MODE, `${!darkModeState}`);
  };

  useEffect(() => {
    getDarkModeState();
  }, []);

  useEffect(() => {
    if (darkMode) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }, [theme, darkMode]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <MainNavigation darkMode={darkMode} setDarkMode={setDarkModeState} />
      </NavigationContainer>
    </PaperProvider>
  );
}
