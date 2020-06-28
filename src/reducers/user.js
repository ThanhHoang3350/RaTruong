import * as types from './../constants/ActionType';

let defaultState = {
	isLogin: false,
	info: {email: '', uid: '', username: ''}
};


const user = (state = defaultState, action) => {

	switch(action.type){

		case types.USER_LOGIN:
			state.isLogin = true;
			state.info = action.userInfo;
			return {...state};

		case types.USER_LOGOUT:
			state.isLogin = false;
			state.info = {email: '', uid: '', username: ''};
			return {...state};
		default:
			return state;
	}
}

export default user;
