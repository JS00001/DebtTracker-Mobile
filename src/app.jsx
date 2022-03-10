import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Reducer from './redux/store';
import Navigation from './navigation';

const queryClient = new QueryClient();
const client = new ApolloClient({
	uri: 'https://debttracker-graphql.herokuapp.com/graphql',
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
		},
	},
});

export default function App() {
	return (
		<Provider store={Reducer}>
			<QueryClientProvider client={queryClient}>
				<ApolloProvider client={client}>
					<NavigationContainer theme={{ colors: { background: 'white' } }}>
						<Navigation />
					</NavigationContainer>
				</ApolloProvider>
			</QueryClientProvider>
		</Provider>
	);
}
