import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navigation from './navigation';

const queryClient = new QueryClient();
const client = new ApolloClient({
	uri: 'https://debttracker-graphql.herokuapp.com/graphql',
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<NavigationContainer>
			<QueryClientProvider client={queryClient}>
				<ApolloProvider client={client}>
					<Navigation />
				</ApolloProvider>
			</QueryClientProvider>
		</NavigationContainer>
	);
}
