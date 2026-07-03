import { useTheme } from '@/context/theme';
import { Pressable, Text, View } from 'react-native';

export const THeader = () => {
  const { toggle } = useTheme();

  return (
    <View className="h-28 justify-center items-center bg-violet-300">
      <Text>Header ne!</Text>
      <Pressable
        className="border border-cyan-300 rounded"
        onPress={() => toggle()}
      >
        <Text className="text-black font-bold p-2">Dark/Light Mode</Text>
      </Pressable>
    </View>
  );
};
