/// <reference types="nativewind/types" />
import { CartProvider } from "@/components/CartContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { RootSiblingParent } from 'react-native-root-siblings';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Sora-Regular": require("@/assets/fonts/Sora-Regular.ttf"),
    "Sora-Semibold": require("@/assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Bold": require("@/assets/fonts/Sora-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <CartProvider>
      <RootSiblingParent>
        <Stack>
          <Stack.Screen name="index" 
          options={{ headerShown: false }}
          />
          <Stack.Screen name="details" 
          options={{ headerShown: true }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RootSiblingParent>
    </CartProvider>
  );
}
