import '../global.css';

import { AuthProvider } from '@/context/auth';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <SafeAreaView edges={['top']} className="flex-1 bg-gray-900">
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
