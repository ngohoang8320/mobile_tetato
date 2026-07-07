import { Pressable, Text, View } from 'react-native';
import { TIcon, type IconName } from '../icon/icon';

type ButtonVariant = 'primary' | 'disabled' | 'link' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ContenStyle = 'hero' | 'title' | 'body' | 'base' | 'label' | 'caption' | 'link';

type TButtonProps = {
	label?: string;
	widthBtn?: number;
	variant?: ButtonVariant;
	size?: ButtonSize;
	contenStyle?: ContenStyle;
	disabled?: boolean;
	onClick?: () => void;
	onlyIcon?: boolean;
	iconName?: IconName;
	iconSize?: number;
	iconColor?: string;
	iconContainerClass?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'bg-primary',
	disabled: 'bg-gray-200',
	link: '',
	outline: 'border border-primary bg-transparent',
	ghost: 'bg-transparent'
};

const labelStyles: Record<ButtonVariant, string> = {
	primary: 'text-white px-2',
	disabled: 'text-text-muted px-2',
	link: 'text-primary underline font-medium px-2',
	outline: 'text-primary px-2',
	ghost: 'text-primary px-2'
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: 'px-xs py-xxxs',
	md: 'px-sm',
	lg: 'px-md py-xs'
};

const contenStyles: Record<ContenStyle, string> = {
	hero: 'text-hero',
	title: 'text-title',
	body: 'text-body',
	base: 'text-base',
	label: 'text-label',
	caption: 'text-caption',
	link: 'text-link'
};

export const TButton = ({
	label,
	widthBtn,
	variant = 'primary',
	size,
	contenStyle = 'label',
	onClick,
	disabled,
	onlyIcon,
	iconName,
	iconSize,
	iconColor,
	iconContainerClass,
	...rest
}: TButtonProps) => {
	return (
		<Pressable
			className={`items-center justify-center rounded-lg ${variantStyles[variant]} ${!onlyIcon && size && sizeStyles[size]} ${disabled ? 'opacity-50' : ''}`}
			disabled={disabled}
			onPress={onClick}
			style={
				onlyIcon && iconSize
					? {
							width: iconSize + (iconSize * 2) / 3,
							height: iconSize + (iconSize * 2) / 3
						}
					: {
							width: widthBtn
						}
			}
			{...rest}
		>
			<View className="flex flex-row items-center">
				{label && (
					<Text
						className={`font-semibold ${labelStyles[variant]} ${contenStyles[contenStyle]} ${(iconName && onlyIcon) ?? 'pr-3'}`}
					>
						{label}
					</Text>
				)}
				{iconName && (
					<TIcon
						name={iconName}
						color={iconColor}
						size={iconSize}
						containerClass={iconContainerClass ?? ''}
					/>
				)}
			</View>
		</Pressable>
	);
};
