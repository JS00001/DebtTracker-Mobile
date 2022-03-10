export default {
	setDebts: (debts) => {
		return {
			type: 'SET_DEBTS',
			payload: debts,
		};
	},
	deleteDebt: (user) => {
		return {
			type: 'DELETE_DEBT',
			payload: user,
		};
	},
};
