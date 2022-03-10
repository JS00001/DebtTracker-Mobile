const initialState = {
	debts: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'SET_DEBTS':
			return {
				...state,
				debts: action.payload,
			};
		case 'DELETE_DEBT':
			return {
				...state,
				debts: state.debts.filter((debt) => debt.user !== action.payload),
			};
		default:
			return state;
	}
}
