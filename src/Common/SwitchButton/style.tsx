import styled from 'styled-components/macro';

export const CheckBoxWrapper = styled.div`
	position: relative;
	width: 75px;
	height: 42px;
	border: solid 1px #444e72;
	background-color: #fff;
	border-radius: 100px;
`;

export const CheckBoxLabel = styled.label`
	position: absolute;
	cursor: pointer;
	content: '';
	border-radius: 50%;
	width: 32px;
	height: 32px;
	transition: 0.2s;
	background-color: #838baa;
	top: 4px;
`;

export const CheckBox = styled.input`
	opacity: 0;
	width: 0px;
	height: 0px;
	& ${CheckBoxLabel} {
		left: 4px;
	}
	&:checked + ${CheckBoxLabel} {
		right: 4px;
	}
`;

export const LeftSvgWrapper = styled.div`
	position: absolute;
	left: 8px;
	top: 8px;
	width: 24px;
	height: auto;
`;
export const RightSvgWrapper = styled.div`
	position: absolute;
	right: 8px;
	top: 8px;
	width: 24px;
	height: auto;
`;
