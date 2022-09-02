import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { SvgArrow, SvgCheck, SvgFav, SvgInfoCircle } from '../../assets/Svg.styles';

import * as Styled from './styles';

export interface ToastProps {}

const Toast: React.FC<ToastProps> = () => {
	return (
		<>
			<Styled.ToastSuccess
				enableMultiContainer
				autoClose={3000}
				position='bottom-center'
				icon={<SvgCheck width='30' height='30' />}
				containerId={'success'}
				// styled='success'
			/>
			<Styled.ToastError
				enableMultiContainer
				autoClose={3000}
				position='bottom-center'
				icon={<SvgInfoCircle width='30' height='30' />}
				containerId={'error'}
			/>
		</>
	);
};

export default Toast;
