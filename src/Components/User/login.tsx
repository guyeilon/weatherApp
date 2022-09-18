import { ReactElement } from 'react';
import Button from '../../Common/Button';
import Input from '../../Common/FormInput';
import { useFormik } from 'formik';
import { FormSchema } from '../../schemas';
import { useLogin } from './hooks/useLogin';
import * as Styled from './styles';
import Logo from '../../assets/Logo';

export interface LoginProps {}

interface ValuesType {
	email: string;
	password: string;
}

export const Login = (): ReactElement => {
	const { mutate: login } = useLogin();

	const onSubmit = async (values: ValuesType, actions: any) => {
		const { email, password } = values;

		login(values);

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
		<Styled.ContentWrapper>
			<Logo />

			<Styled.LoginWrapper>
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
			</Styled.LoginWrapper>
		</Styled.ContentWrapper>
	);
};

export default Login;
