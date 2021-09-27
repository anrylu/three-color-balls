import * as types from '../constants/actionTypes';

const initialState = {
    redBallsCount: 8,
    blueBallsCount: 8,
    greenBallsCount: 8,
    drawCount: 12,
    totalCombinations: 2704156,
    occurenceMap: {
        '8,4,0': 420,
        '8,3,1': 2688,
        '8,2,2': 2352,
        '7,5,0': 2688,
        '7,4,1': 26880,
        '7,3,2': 75264,
        '6,6,0': 2352,
        '6,5,1': 75264,
        '6,4,2': 329280,
        '6,3,3': 263424,
        '5,5,2': 263424,
        '5,4,3': 1317120,
        '4,4,4': 343000,
    },
    rewardMap: {
        '8,4,0': 300,
        '8,3,1': 100,
        '8,2,2': 120,
        '7,5,0': 60,
        '7,4,1': 40,
        '7,3,2': 15,
        '6,6,0': 100,
        '6,5,1': 10,
        '6,4,2': 5,
        '6,3,3': 5,
        '5,5,2': 5,
        '5,4,3': -30,
        '4,4,4': 5,
    }
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
        case types.UPDATE_REWARD: {
            return {
                ...state,
                rewardMap: {
                    ...state.rewardMap,
                    ...action.payload
                }
            }
        }
		default: return state;
	}
}
