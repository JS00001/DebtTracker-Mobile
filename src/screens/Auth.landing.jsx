import { View, Text } from 'react-native';

import tw from 'twrnc';

import Button from '../components/Button';

export default function ({ navigation }) {
	const handleLoginPress = () => {
		navigation.navigate('Login');
	};

	const handleRegisterPress = () => {
		navigation.navigate('Register');
	};

	return (
		<>
			<View style={tw`flex h-full justify-end`}>
				<View style={tw`items-center pb-10 w-full`}>
					<Button onPress={handleLoginPress}>Login</Button>
					<Button onPress={handleRegisterPress}>Register</Button>
				</View>
			</View>
		</>
	);
}
