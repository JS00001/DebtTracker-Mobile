import { useQuery } from '@apollo/client';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

import graphql from '../graphql';
import Button from '../components/Button';
import AuthAction from '../redux/actions/authAction';
import HomeSkeleton from '../components/Home.skeleton';
import DebtsAction from '../redux/actions/debtsAction';

export default function () {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);
	const debts = useSelector((state) => state.debts.debts);

	const { loading } = useQuery(graphql.GET_DEBTS, {
		context: {
			headers: {
				authorization: token,
			},
		},
		onCompleted: (data) => {
			dispatch(DebtsAction.setDebts(data.getDebts));
		},
	});

	const onLogOut = async () => {
		await AsyncStorage.removeItem('token');
		dispatch(AuthAction(null));
	};

	if (loading) return <HomeSkeleton />;

	return (
		<ScrollView>
			<View style={tw`items-center my-5`}>
				<Button onPress={onLogOut}>Sign out</Button>
				{debts.map((item, i) => (
					<Card item={item} key={i} />
				))}
			</View>
		</ScrollView>
	);
}

const Card = ({ item: { user, amount, date } }) => {
	return (
		<View style={tw`bg-gray-100 w-5/6 rounded-2xl p-5 my-2`}>
			<View style={tw`flex-row items-center justify-between`}>
				<Text style={tw`text-xl font-bold`}>{user}</Text>
				<Text style={tw`text-gray-500`}>{date}</Text>
			</View>
			<Text style={tw`text-4xl font-bold text-gray-300`}>${amount}</Text>
		</View>
	);
};
