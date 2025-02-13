import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home1' }} />
      {/* <Stack.Screen name="about" options={{ title: 'About2' }} /> */}
    </Stack>
  );
}
