import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function ({}) {
	return (
		<View
			style={{
				...StyleSheet.absoluteFill,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'rgba(0,0,0,0.5)',
			}}
		>
			<ActivityIndicator
				size='large'
				style={{ backgroundColor: 'black', padding: 15, borderRadius: 5 }}
			/>
		</View>
	);
}
