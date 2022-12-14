import { ReactElement } from 'react';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { ThreeDots } from 'react-loader-spinner';
import { queryKeys } from '../../react-query/constants';
import { usePreference } from '../../zustand/hooks/usePreference';

export function Loading(): ReactElement {
	const isFetching = useIsFetching([queryKeys.forecast]);
	const isMutating = useIsMutating([queryKeys.favorites]);
	const { isDarkMode } = usePreference();

	const color = isDarkMode ? '#fff' : '#0f0f0ef0';

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
