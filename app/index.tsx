import { colors } from '@/constants/theme';
import { useAuth } from '@/context/auth';
import { useFirstTimeOpen } from '@/hooks/useFirstTimeOpen';
import { Redirect, useRouter } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const { isLoggedIn, isLoading: isAuthLoading } = useAuth();
  const {
    isFirstTime,
    isLoading: isFirstTimeLoading,
    setOpened,
  } = useFirstTimeOpen();
  const isLoading = isAuthLoading || isFirstTimeLoading;
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoading && isFirstTime) {
  //     setOpened();
  //   }
  // }, [isLoading, isFirstTime]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-900">
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return <Redirect href="/splash" />;
}
