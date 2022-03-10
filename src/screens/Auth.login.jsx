import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { TextInput, View, Keyboard } from 'react-native';

import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../api';
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import Loading from '../components/Loading';
import AuthAction from '../redux/actions/authAction';

export default function () {
	const dispatch = useDispatch();
	const { mutate, isLoading } = useMutation(api.login, {
		onSuccess: async (data) => {
			await AsyncStorage.setItem('token', data.token);
			dispatch(AuthAction(data.token));
		},
		onError: async () => {
			alert('Invalid Login');
		},
	});

	const [values, setValues] = useForm({ username: '', password: '' });

	const onSubmit = () => {
		Keyboard.dismiss();
		mutate(values);
	};

	return (
		<View style={tw`items-center h-full`}>
			<TextInput
				name='username'
				value={values.username}
				textContentType='username'
				onChangeText={(text) => setValues('username', text)}
				placeholder='Username'
				style={tw`bg-gray-100 w-5/6 p-4 rounded-lg my-1`}
			/>
			<TextInput
				name='password'
				value={values.password}
				onChangeText={(text) => setValues('password', text)}
				placeholder='Password'
				style={tw`bg-gray-100 w-5/6 p-4 rounded-lg my-1`}
				secureTextEntry
			/>
			<Button onPress={onSubmit}>Login</Button>
			{isLoading && <Loading />}
		</View>
	);
}
