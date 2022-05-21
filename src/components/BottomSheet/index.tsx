import React, { useMemo } from 'react';
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import BottomSheetBackdrop from '../BottomSheetBackdrop';

const BottomSheet = (props: any) => {
	const { bottomSheetModalRef } = props;
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
