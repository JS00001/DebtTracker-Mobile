import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import tw from 'twrnc';

export default function ({ navigation }) {
	const onLogOut = async () => {
		await AsyncStorage.removeItem('token');
		navigation.navigate('Login');
	};

	return (
		<View style={tw`items-center`}>
			<Button onPress={onLogOut}>Log Out</Button>
		</View>
	);
}
