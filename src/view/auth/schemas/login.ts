import {z} from 'zod';

export const validationSchemaLogin = z.object({
	email: z.string().min(1, {message: 'Email is required'}).email({
		message: 'Please enter a valid email address',
	}),
	password: z
		.string()
		.min(6, {message: 'Password must be atleast 6 characters'}),
});

export type ValidationSchemaLoginType = z.infer<typeof validationSchemaLogin>;
