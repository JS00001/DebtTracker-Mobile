import { gql } from '@apollo/client';

export default {
	ADD_DEBT: gql`
		mutation addDebt($user: String!, $amount: Float!, $date: String!) {
			addDebt(user: $user, amount: $amount, date: $date) {
				user
				amount
				date
			}
		}
	`,
	GET_DEBTS: gql`
		query getDebts {
			getDebts {
				user
				amount
				date
			}
		}
	`,
};
