import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import '../assets/css/globals.css';
import SplashScreen from './(auth)/splash';
import { LikedProvider } from './context/LikedContext';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Jakarta-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <SplashScreen />
  }

  return (
    <LikedProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="(auth)/splash"/>
        <Stack.Screen name="(auth)/Welcome" />
        <Stack.Screen name="(tabs)"/>
      </Stack>
    </LikedProvider>
  );
}
