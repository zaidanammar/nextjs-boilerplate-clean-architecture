import {zodResolver} from '@hookform/resolvers/zod';
import {
	useForm as useHookForm,
	UseFormProps as UseHookFormProps,
} from 'react-hook-form';
import {z, ZodSchema} from 'zod';

type UseFormProps<T extends ZodSchema<any>> = {
	schema: T;
} & UseHookFormProps<z.infer<T>>;

export const useForm = <T extends ZodSchema<any>>({
	schema,
	...formConfig
}: UseFormProps<T>) => {
	const form = useHookForm({
		...formConfig,
		resolver: zodResolver(schema),
	});

	return {form, ...form};
};
