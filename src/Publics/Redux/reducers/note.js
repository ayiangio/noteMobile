import { AsyncStorage } from 'react-native'
const initialState = {
	noteList: [],
	catList:[],
	isLoading: false,
	isFulfilled: false,
	isRejected: false,
};

const note = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_NOTE_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_NOTE_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_NOTE_FULFILLED':
			// state.userList.push(action.payload.data);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				noteList: action.payload.data.result
			};
		case 'GET_CAT_NOTE_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_CAT_NOTE_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_CAT_NOTE_FULFILLED':
			// state.userList.push(action.payload.data);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				catList: action.payload.data.result
			};
		default:
			return state;
	}
};

export default note;
