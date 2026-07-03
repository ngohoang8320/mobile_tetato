import { TInput } from '@/components/input/tInput';
import { Keyboard, Pressable, View } from 'react-native';

const Signin = () => {
  return (
    <Pressable className="flex-1" onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center items-center bg-white">
        <View className="mb-2 w-full px-md">
          <TInput label="Tên tài khoản" variant="otp" />
        </View>

        <View className="mb-2 w-full px-md">
          <TInput label="Tên tài khoản" />
        </View>

        <View className="mb-2 w-full px-md">
          <TInput label="Tên tài khoản" variant="disabled" />
        </View>

        <View className="mb-2 w-full px-md">
          <TInput label="Tên tài khoản" variant="multiline" />
        </View>
      </View>
    </Pressable>

    // <View className="flex-1 justify-center items-center bg-cyan-200">
    //   <View className="mb-2">
    //     <TButton label="Xác nhận" />
    //   </View>

    //   <View className="mb-2">
    //     <TButton label="Xác nhận" variant="disabled" />
    //   </View>

    //   <View className="mb-2">
    //     <TButton label="Xác nhận" variant="outline" />
    //   </View>

    //   <View className="mb-2">
    //     <TButton label="Xác nhận" variant="ghost" />
    //   </View>

    //   <View className="mb-2">
    //     <TButton label="Xác nhận" variant="link" />
    //   </View>

    //   <View className="mb-2">
    //     <TButton
    //       variant="primary"
    //       iconName="plusRoundIcon"
    //       iconColor="#fff"
    //       iconSize={35}
    //       onlyIcon={true}
    //     />
    //   </View>

    //   <View className="mb-2">
    //     <TButton variant="ghost" iconName="plusRoundIcon" iconSize={35} />
    //   </View>

    //   <View className="mb-2">
    //     <TButton
    //       label="Xác nhận"
    //       iconName="plusRoundIcon"
    //       iconSize={25}
    //       iconColor="#fff"
    //     />
    //   </View>
    // </View>
  );
};

export default Signin;
