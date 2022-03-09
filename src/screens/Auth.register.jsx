import { useMutation } from 'react-query';
import { TextInput, View } from 'react-native';

import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../components/Button';
import useForm from '../hooks/useForm';
import api from '../api';

export default function ({ navigation }) {
	const { mutate, isLoading } = useMutation(api.register, {
		onSuccess: async (data) => {
			await AsyncStorage.setItem('token', data.token);
			navigation.navigate('Home');
			alert(data.token);
		},
		onError: (error) => {
			alert(error);
		},
	});

	const [values, setValues] = useForm({ username: '', password: '', confirmPassword: '' });

	const onSubmit = () => {
		mutate(values);
	};

	return (
		<View style={tw`items-center`}>
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
			<TextInput
				name='confirmPassword'
				value={values.confirmPassword}
				onChangeText={(text) => setValues('confirmPassword', text)}
				placeholder='Confirm Password'
				style={tw`bg-gray-200 w-5/6 p-4 rounded-lg my-1`}
				secureTextEntry
			/>
			<Button onPress={onSubmit}>Register</Button>
		</View>
	);
}
