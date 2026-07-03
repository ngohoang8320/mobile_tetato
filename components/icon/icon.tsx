import { SvgProps } from 'react-native-svg';

import PlusRoundIcon from '@/assets/icons/plus-round.svg';
import { View } from 'react-native';

const icons = {
  plusRoundIcon: PlusRoundIcon,
} as const;

export type IconName = keyof typeof icons;

type Props = SvgProps & {
  name: IconName;
  size?: number;
  containerClass?: string;
};

export const TIcon = ({
  name,
  size = 20,
  width,
  height,
  color = '#000',
  containerClass,
  ...rest
}: Props) => {
  const Icon = icons[name];
  return (
    <View className={containerClass}>
      <Icon
        width={width ?? size}
        height={height ?? size}
        color={color}
        {...rest}
      />
    </View>
  );
};
