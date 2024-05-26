// app/index.tsx
import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.setOptions({ headerShown: false });
  // }, [router]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => router.push('/Screens/Details')} />
      <Button title="Go to Login" onPress={() => router.push('/Src/Screens/LogIn')} />
      
    </View>
  );
}
