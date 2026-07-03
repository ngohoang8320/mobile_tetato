import '../global.css';

import { colors } from '@/constants/theme';
import { AuthProvider, useAuth } from '@/context/auth';
import { useFirstTimeOpen } from '@/hooks/useFirstTimeOpen';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function RootLayoutNav() {
  const { isLoggedIn, isLoading: isAuthLoading } = useAuth();
  const {
    isFirstTime,
    isLoading: isFirstTimeLoading,
    setOpened,
    resetFirstTime,
  } = useFirstTimeOpen();
  const isLoading = isAuthLoading || isFirstTimeLoading;

  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (isFirstTime) {
      setOpened();
      router.replace('/splash');
    } else if (!isLoggedIn) {
      router.replace('/(auth)/signIn');
    } else {
      router.replace('/(app)/dashboard');
    }
  }, [isLoggedIn, isLoading, isFirstTime]);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-gray-900">
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <RootLayoutNav />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
