import * as types from '../constants/ActionType';

let defaultState = [];


const shipper = (state = defaultState, action) => {
	switch(action.type){
		case types.SHIPPER:
            state = action.shipper
			return {...state};
		default:
			return state;
	}
}

export default shipper;