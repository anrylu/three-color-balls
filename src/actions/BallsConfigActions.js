import * as types from '../constants/actionTypes';

export function updateBallsConfig(data) {
	return (dispatch) => {
		dispatch({ type: types.UPDATE_BALLS_CONFIG, payload: data});
	}
}

export function updateReward(data) {
	return (dispatch) => {
		dispatch({ type: types.UPDATE_REWARD, payload: data});
	}
}
