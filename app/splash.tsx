import {
  Image,
  ImageBackground,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import splash1 from "@/assets/images/splash_1.png";
import splash2 from "@/assets/images/splash_2.png";
import splash3 from "@/assets/images/splash_3.png";
import { TButton } from "@/components/button/tButton";
import { useEffect, useRef, useState } from "react";

const Splash = () => {
  const listSplash = [
    {
      image: splash1,
      title: "Cùng chơi",
      message: "Không đơn độc, luôn có team sẵn sàng đồng hành.",
    },
    {
      image: splash2,
      title: "Cùng vui",
      message: "Mỗi trận đấu là một phút giây thăng hoa.",
    },
    {
      image: splash3,
      title: "Cùng khoẻ",
      message: "Cơ thể cường tráng, tinh thần sảng khoái mỗi ngày.",
    },
  ];

  const { width } = useWindowDimensions();
  const CIRCLE_SIZE = width * 0.925;
  const SCALE_IMAGE = 1.8;

  const steps = 3;
  const [step, setStep] = useState(0);

  const slideX = useSharedValue(0);
  const fade = useSharedValue(1);
  const fillWidth = useSharedValue(0);
  const exitTranslateX = useSharedValue(0);
  const prevStepRef = useRef(0);
  const [exitStep, setExitStep] = useState<number | null>(null);

  useEffect(() => {
    const prev = prevStepRef.current;
    prevStepRef.current = step;

    if (prev !== step) {
      setExitStep(prev);
      exitTranslateX.value = 0;
      exitTranslateX.value = withTiming(40, { duration: 300 }, (finished) => {
        if (finished) setExitStep(null);
      });
    }

    fillWidth.value = 0;
    fillWidth.value = withTiming(40, { duration: 400 });
  }, [step]);

  const animateTo = (nextStep: number, direction: "left" | "right") => {
    const exitTo = direction === "left" ? -40 : 40;
    const enterFrom = direction === "left" ? 40 : -40;

    fade.value = withTiming(0, { duration: 150 });
    slideX.value = withTiming(exitTo, { duration: 150 }, (finished) => {
      if (!finished) return;
      setStep(nextStep);
      slideX.value = enterFrom;
      fade.value = withTiming(1, { duration: 200 });
      slideX.value = withTiming(0, { duration: 200 });
    });
  };

  const handleNext = () => {
    animateTo(step < steps - 1 ? step + 1 : 0, "left");
  };

  const handleBack = () => {
    animateTo(step > 0 ? step - 1 : steps - 1, "right");
  };

  const textStyle = useAnimatedStyle(() => ({
    opacity: fade.value,
    transform: [{ translateX: slideX.value }],
  }));

  const fillStyle = useAnimatedStyle(() => ({
    width: fillWidth.value,
    height: "100%",
  }));

  const exitFillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: exitTranslateX.value }],
    width: "100%",
    height: "100%",
  }));

  return (
    <ImageBackground
      source={listSplash[step].image}
      resizeMode="cover"
      blurRadius={30}
      imageStyle={{ transform: [{ scale: SCALE_IMAGE }] }}
      className="flex-1 items-center justify-center pb-20"
    >
      <View
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          borderRadius: CIRCLE_SIZE / 2,
          overflow: "hidden",
        }}
        className="bg-black"
      >
        <Image
          source={listSplash[step].image}
          style={{
            width: "100%",
            height: "100%",
            transform: [{ scale: SCALE_IMAGE }],
          }}
          resizeMode="center"
        />
      </View>
      <Animated.View style={textStyle} className="h-24 w-[80%] items-center">
        <Text className="text-hero font-semibold">
          {listSplash[step].title}
        </Text>
        <Text className="text-center text-body font-bold">
          {listSplash[step].message}
        </Text>
      </Animated.View>
      <View className="absolute bottom-5 w-[90%] flex-row justify-between">
        <TButton variant="link" label="Bỏ qua" onClick={handleBack} />

        <View className="border-1 flex-row items-center gap-2">
          {Array.from({ length: steps }).map((_, i) => (
            <View
              key={i}
              className="h-2 w-10 overflow-hidden rounded-sm bg-border"
            >
              {i === step && (
                <Animated.View
                  style={fillStyle}
                  className="rounded-sm bg-primary"
                />
              )}
              {i === exitStep && (
                <Animated.View
                  style={exitFillStyle}
                  className="rounded-sm bg-primary"
                />
              )}
            </View>
          ))}
        </View>

        <TButton variant="link" label="Tiếp" onClick={handleNext} />
      </View>
    </ImageBackground>
  );
};

export default Splash;
