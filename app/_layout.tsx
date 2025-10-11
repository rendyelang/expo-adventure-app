import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="splash"/>
      <Stack.Screen name="home"/>
      <Stack.Screen name="Counter" />
    </Stack>
  );
}
