import React from 'react';

export default function useForm(initialValues) {
	const [values, setValues] = React.useState(initialValues);

	return [
		values,
		(key, value) => {
			setValues({
				...values,
				[key]: value,
			});
		},
	];
}
