import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import React, { useMemo } from 'react';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from 'react-native-reanimated';

/**
 * It's a React component that renders an animated backdrop for a bottom sheet.
 * @param {BottomSheetBackdropProps} props - BottomSheetBackdropProps
 * @returns A view with a style.
 */
const BottomSheetBackdrop = (props: BottomSheetBackdropProps) => {
	const { animatedIndex, style } = props;

	/* It's a React hook that returns an animated style. */
	const containerAnimatedStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			animatedIndex.value,
			[0, 1],
			[0, 1],
			Extrapolate.CLAMP,
		),
	}));

	/* It's a React hook that returns a memoized value. It only recomputes the memoized value when one
	of the dependencies has changed. This optimization helps to avoid expensive calculations on every
	render. */
	const containerStyle = useMemo(
		() => [
			style,
			{
				backgroundColor: '#00000078',
			},
			containerAnimatedStyle,
		],
		[style, containerAnimatedStyle],
	);

	return <Animated.View style={containerStyle} />;
};

export default BottomSheetBackdrop;
