import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppHome from '../screens/App.home';
import AppAddDebt from '../screens/App.addDebt';
import Loading from '../components/Loading';
import AuthLogin from '../screens/Auth.login';
import AuthLanding from '../screens/Auth.landing';
import AuthRegister from '../screens/Auth.register';
import authAction from '../redux/actions/authAction';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name='Landing'
				component={AuthLanding}
				options={{
					title: null,
					headerLeft: () => <Text style={tw`text-2xl font-bold ml-4`}>Welcome</Text>,
				}}
			/>
			<Stack.Screen
				name='Login'
				component={AuthLogin}
				options={{ headerBackTitleVisible: false, headerTitleStyle: tw`text-2xl font-bold` }}
			/>
			<Stack.Screen
				name='Register'
				component={AuthRegister}
				options={{ headerBackTitleVisible: false, headerTitleStyle: tw`text-2xl font-bold` }}
			/>
		</Stack.Navigator>
	);
};

const AppStackNavigator = () => {
	const navigation = useNavigation();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name='Home'
				component={AppHome}
				options={{
					title: null,
					headerLeft: () => <Text style={tw`text-2xl font-bold ml-4`}>Home</Text>,
					headerRight: () => (
						<Ionicons
							name='add-sharp'
							size={30}
							color='black'
							onPress={() => navigation.navigate('AddDebt')}
						/>
					),
				}}
			/>
			<Stack.Screen
				name='AddDebt'
				component={AppAddDebt}
				options={{
					title: null,
					headerLeft: () => <Text style={tw`text-2xl font-bold ml-4`}>Add</Text>,
				}}
			/>
		</Stack.Navigator>
	);
};

const RootStack = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.token);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		AsyncStorage.getItem('token')
			.then((token) => {
				if (token) dispatch(authAction(token));
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <Loading />;

	return isAuth ? <AppStackNavigator /> : <AuthStackNavigator />;
};

export default RootStack;
