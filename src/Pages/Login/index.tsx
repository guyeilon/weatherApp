import React from 'react';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import * as Styled from './styles';

import { useFormik } from 'formik';
import { FormSchema } from '../../schemas';
import Logo from '../../assets/Logo';
import { useAuth } from '../../auth/useAuth';

import { useLoginStore } from '../../zustand/store';
import { useUserQuery } from '../../react-query/useUserQuery';

export interface LoginProps {}

interface ValuesType {
	email: string;
	password: string;
}

const Login: React.FC<LoginProps> = Props => {
	const auth = useAuth();
	const loginStore = useLoginStore(state => state);

	const { user } = useUserQuery();
	console.log('user from login:', user);

	const onSubmit = async (values: ValuesType, actions: any) => {
		const { email, password } = values;
		const user = await auth.login(email, password);
		console.log(user);

		actions.resetForm();
	};

	const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: 'guyeilon84@gmail.com',
			password: '@Q1w2e3r4',
		},
		validationSchema: FormSchema,
		onSubmit,
	});

	return (
		<>
			<Logo />

			<Styled.ContentWrapper>
				<Styled.Header>Log in</Styled.Header>
				<form onSubmit={handleSubmit} autoComplete='off' noValidate style={{ width: '100%' }}>
					<Input
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						errors={errors}
						id='email'
						type='email'
						touched={touched}
						title={'Email account'}
						placeholder='Enter your email account'
					/>
					<Input
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						errors={errors}
						id='password'
						type='password'
						touched={touched}
						title={'Password'}
						placeholder='6 characters and digit numbers...'
					/>
					<Button login style={{ marginTop: '20px' }} type='submit' disabled={isSubmitting}>
						Log in
					</Button>
				</form>
				<Styled.Line data='Or log in with' />
				<Styled.ButtonWrapper>
					<Styled.Btn renderAs={'a'} svg='fb'>
						Log in with Facebook
					</Styled.Btn>
					<Styled.Btn renderAs={'a'} svg='google'>
						Log in with Google
					</Styled.Btn>
				</Styled.ButtonWrapper>
			</Styled.ContentWrapper>
		</>
	);
};

export default Login;
