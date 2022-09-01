import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import * as Styled from './styles';

export interface ToastProps {}

const Toast: React.FC<ToastProps> = () => {
	return <Styled.Toast autoClose={1000} />;
};

export default Toast;
