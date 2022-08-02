import { FormikTouched } from 'formik';
import React from 'react';
import * as Styled from './styles';

export interface InputProps {
	value?: string;
	placeholder?: string;
	title?: string;
	errors?:
		| {
				email?: string | undefined;
				password?: string | undefined;
		  }
		| undefined;

	type?: string;
	id?: string;
	onBlur?: (e: React.FocusEvent<any, Element>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	touched?: FormikTouched<{
		email: string;
		password: string;
	}>;
}

const Input: React.FC<InputProps> = ({ title, type, value, onChange, placeholder, onBlur, id, errors, touched }) => {
	return (
		<>
			<Styled.InputWrapper>
				<Styled.Label>{title}</Styled.Label>
				<Styled.InputField
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					id={id}
					type={type}
				/>
			</Styled.InputWrapper>
			<Styled.ErrorMsg>
				{type === 'email'
					? errors?.email && touched?.email && errors.email
					: errors?.password && touched?.password && errors.password}
			</Styled.ErrorMsg>
		</>
	);
};

export default Input;
