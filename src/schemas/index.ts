import * as yup from 'yup';

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z].{6,})$/;
// min 6 characters, 1 upper case letter , 1 lower case letter, 1 numeric digit.
const passwordRules = /^.{6,}$/;

export const FormSchema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	password: yup
		.string()
		.min(6)
		.matches(passwordRules, { message: 'Please enter a valid password' })
		.required('Required'),
});
