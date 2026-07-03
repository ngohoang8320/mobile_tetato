import { useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TButton } from '../button/tButton';

type InputVariant = 'default' | 'disabled' | 'multiline' | 'otp';

const variantStyles: Record<InputVariant, string> = {
  default: 'text-base text-text-muted bg-surface-input rounded-2xl pl-3',
  disabled: 'text-base text-text-muted bg-gray-25 rounded-2xl pl-3',
  multiline: 'text-base text-text-muted bg-surface-input rounded-2xl pl-3',
  otp: 'bg-surface-input',
};

type TInputProps = {
  label?: string;
  value?: string;
  widthInput?: number;
  placeHolderContent?: string;
  variant?: InputVariant;
  otpBlock?: number;
  otpBlockSize?: number;
};

export const TInput = ({
  label = 'Lable',
  value,
  widthInput,
  placeHolderContent = 'nguyenvana',
  variant = 'default',
  otpBlock = 6,
  otpBlockSize = 40,
}: TInputProps) => {
  if (variant !== 'otp')
    return (
      <View className="gap-2 w-full">
        <Text className="text-text-muted">{label}</Text>
        <View className="w-full">
          <TextInput
            value={value}
            editable={variant !== 'disabled'}
            className={`${variantStyles[variant]}`}
            placeholder={placeHolderContent}
            style={
              widthInput
                ? { width: widthInput }
                : {
                    width: '100%',
                    ...(variant === 'multiline' && {
                      height: 100,
                      textAlignVertical: 'top',
                    }),
                  }
            }
            multiline={variant === 'multiline'}
            numberOfLines={variant === 'multiline' ? 4 : 1}
            maxLength={40}
          />
        </View>
      </View>
    );

  // --- Handle OTP ---
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(otpBlock).fill(''),
  );

  return (
    <View className="gap-2 w-full">
      <Text className="text-text-muted">{label}</Text>
      <View className="flex-row">
        <View className="flex-row gap-1 rounded-lg overflow-hidden self-center">
          {[...Array(otpBlock)].map((_, i) => (
            <TextInput
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              value={otpValues[i]}
              maxLength={1}
              keyboardType="numeric"
              selectTextOnFocus
              className={variantStyles['otp']}
              style={{
                width: otpBlockSize,
                height: otpBlockSize,
                textAlign: 'center',
              }}
              onChangeText={(text) => {
                const next = [...otpValues];
                next[i] = text;
                setOtpValues(next);
              }}
              onKeyPress={({ nativeEvent: { key } }) => {
                if (key !== 'Backspace' && i < otpBlock - 1) {
                  inputRefs.current[i + 1]?.focus();
                } else if (key === 'Backspace' && !otpValues[i] && i > 0) {
                  inputRefs.current[i - 1]?.focus();
                }
              }}
            />
          ))}
        </View>
        <TButton label="Gửi lại" variant="link" widthBtn={100}></TButton>
      </View>
    </View>
  );
};
