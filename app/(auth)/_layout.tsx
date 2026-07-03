import { Stack } from 'expo-router';

// export const unstable_settings = {
//   initialRouteName: 'signUp',
// };

export default function AuthLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
