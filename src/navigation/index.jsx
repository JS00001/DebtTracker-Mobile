import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHome from '../screens/App.home';
import AuthLogin from '../screens/Auth.login';
import AuthLanding from '../screens/Auth.landing';
import AuthRegister from '../screens/Auth.register';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Landing' component={AuthLanding} />
			<Stack.Screen name='Login' component={AuthLogin} />
			<Stack.Screen name='Register' component={AuthRegister} />
			<Stack.Screen
				name='Home'
				component={AppHome}
				options={{ gestureEnabled: false, headerBackVisible: false }}
			/>
		</Stack.Navigator>
	);
};

export default AuthStackNavigator;
