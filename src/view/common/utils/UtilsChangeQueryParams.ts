/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
import Router from 'next/router';

const onChangeQueryParams = (key: string, value: string) => {
	const {pathname, query, push} = Router;

	if (value.length > 0) {
		return push({
			pathname,
			query: {
				...query,
				[key]: value,
			},
		});
	}
	const filteredQuery: any = {};

	for (const prop in query) {
		if (query.hasOwnProperty(prop) && key !== prop) {
			filteredQuery[prop] = query[prop];
		}
	}

	return push({
		pathname,
		query: {
			...filteredQuery,
		},
	});
};
