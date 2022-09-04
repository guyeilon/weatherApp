import { ReactElement } from 'react';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { ThreeDots } from 'react-loader-spinner';
import { queryKeys } from '../../react-query/constants';
import { useAppStore } from '../../zustand/store';

export function Loading(): ReactElement {
	const isFetching = useIsFetching([queryKeys.forecast]);
	const isMutating = useIsMutating();
	const store = useAppStore(state => state);

	const color = store.theme === 'light' ? '#0f0f0ef0' : '#fff';

	const display: boolean = isFetching || isMutating ? true : false;

	return (
		<ThreeDots
			height='80'
			width='80'
			radius='9'
			color={color}
			ariaLabel='three-dots-loading'
			wrapperStyle={{
				position: 'fixed',
				zIndex: '9999',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
			visible={display}
		/>
	);
}
