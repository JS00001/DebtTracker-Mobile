import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

export default function ({ children, ...props }) {
	return (
		<TouchableOpacity
			{...props}
			style={tw`w-5/6 bg-red-400 justify-center items-center my-1 bg-indigo-600 p-4 rounded-lg`}
		>
			<Text style={tw`text-white font-semibold`}>{children}</Text>
		</TouchableOpacity>
	);
}
