import React, { useMemo } from 'react';
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import BottomSheetBackdrop from '../BottomSheetBackdrop';

/**
 * BottomSheet is a function that returns a BottomSheetModalProvider component that contains a
 * BottomSheetModal component that contains the children of the BottomSheet component.
 * @param {any} props - any - This is the props that are passed to the component.
 * @returns A BottomSheetModalProvider component with a BottomSheetModal component as a child.
 */
const BottomSheet = (props: any) => {
	const { bottomSheetModalRef } = props;
	/* A React hook that is used to memoize the snapPoints array. */
	const snapPoints = useMemo(() => ['1%', '30%'], []);

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={bottomSheetModalRef}
				index={1}
				snapPoints={snapPoints}
				handleComponent={null}
				backdropComponent={BottomSheetBackdrop}
			>
				{props.children}
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
};

export default BottomSheet;
