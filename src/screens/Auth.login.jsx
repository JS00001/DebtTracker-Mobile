import { TextInput, View } from 'react-native';
import { useMutation } from 'react-query';

import tw from 'twrnc';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../api';
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function ({ navigation }) {
	const { mutate, isLoading } = useMutation(api.login, {
		onSuccess: async (data) => {
			await AsyncStorage.setItem('token', data.token);
			navigation.navigate('Home');
		},
		onError: (error) => {
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
				onChangeText={(text) => setValues('username', text)}
				placeholder='Username'
				style={tw`bg-gray-200 w-5/6 p-4 rounded-lg my-1`}
			/>
			<TextInput
				name='password'
				value={values.password}
				onChangeText={(text) => setValues('password', text)}
				placeholder='Password'
				style={tw`bg-gray-200 w-5/6 p-4 rounded-lg my-1`}
				secureTextEntry
			/>
			<Button onPress={onSubmit}>Login</Button>
			{isLoading && <Loading />}
		</View>
	);
}
