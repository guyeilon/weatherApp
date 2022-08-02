import React from 'react';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import * as Styled from './styles';

import { useFormik } from 'formik';
import { FormSchema } from '../../schemas';
import Logo from '../../assets/Logo';

export interface LoginProps {}

const Login: React.FC<LoginProps> = Props => {
	const onSubmit = async (values: any, actions: any) => {
		console.log(values);

		await new Promise(resolve => setTimeout(resolve, 1000));
		actions.resetForm();
	};

	const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
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
					<Button renderAs={'a'} svg='fb'>
						Log in with Facebook
					</Button>
					<Button renderAs={'a'} svg='google'>
						Log in with Google
					</Button>
				</Styled.ButtonWrapper>
			</Styled.ContentWrapper>
		</>
	);
};

export default Login;
