import * as types from '../constants/actionTypes';

const initialState = {
    redBallsCount: 8,
    blueBallsCount: 8,
    greenBallsCount: 8,
    drawCount: 12
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.UPDATE_BALLS_CONFIG: {
			return {
				...state,
				redBallsCount: action.payload.redBallsCount,
				blueBallsCount: action.payload.blueBallsCount,
				greenBallsCount: action.payload.greenBallsCount,
				drawCount: action.payload.drawCount
			}
		}
		default: return state;
	}
}
