import { useMutation } from '@apollo/client';
import { View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import tw from 'twrnc';

import graphql from '../graphql';
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import DebtsAction from '../redux/actions/debtsAction';

export default function ({ navigation }) {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);
	const [values, setValues] = useForm({
		user: '',
		amount: '',
	});

	const [addDebt] = useMutation(graphql.ADD_DEBT, {
		variables: {
			user: values.user,
			amount: parseFloat(values.amount),
			date: new Date().toLocaleDateString(),
		},
		context: {
			headers: {
				authorization: token,
			},
		},
		onCompleted: (data) => {
			dispatch(DebtsAction.setDebts([...data.addDebt]));
			navigation.navigate('Home');
		},
	});

	return (
		<View style={tw`items-center`}>
			<TextInput
				placeholder='User'
				value={values.user}
				style={tw`bg-gray-100 w-5/6 p-6 rounded-lg my-3 text-xl font-medium`}
				onChangeText={(text) => setValues('user', text)}
			/>
			<TextInput
				placeholder='Amount'
				value={values.amount}
				style={tw`bg-gray-100 w-5/6 p-6 rounded-lg my-3 text-xl font-medium`}
				onChangeText={(text) => setValues('amount', text)}
				keyboardType='numeric'
			/>
			<Button onPress={addDebt}>Add Debt</Button>
		</View>
	);
}
