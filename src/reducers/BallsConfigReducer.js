import * as types from '../constants/actionTypes';
import * as defaults from '../constants/defaults';

const initialState = {
    redBallsCount: defaults.DEFAULT_RED_BALLS_COUNT,
    blueBallsCount: defaults.DEFAULT_BLUE_BALLS_COUNT,
    greenBallsCount: defaults.DEFAULT_GREEN_BALLS_COUNT,
    drawCount: defaults.DEFAULT_DRAW_COUNT,
    totalCombinations: defaults.DEFAULT_TOTAL_COMBINATIONS,
    occurenceMap: defaults.DEFAULT_OCCURENCE_MAP,
    rewardMap: defaults.DEFRAULT_REWARD_MAP
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.UPDATE_BALLS_CONFIG: {
			return {
				...state,
				...action.payload
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
