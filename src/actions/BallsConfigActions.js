import ls from 'local-storage'
import { combinations } from 'mathjs'

import * as types from '../constants/actionTypes';
import * as defaults from '../constants/defaults';

export function updateBallsConfig(data) {
	const {redBallsCount, blueBallsCount, greenBallsCount, drawCount} = data;
	let totalCombinations = 0;
	let occurenceMap = {};
	let rewardMap = {};

	// check if default
	if( redBallsCount === defaults.DEFAULT_RED_BALLS_COUNT &&
		blueBallsCount === defaults.DEFAULT_BLUE_BALLS_COUNT &&
		greenBallsCount === defaults.DEFAULT_GREEN_BALLS_COUNT &&
		drawCount === defaults.DEFAULT_DRAW_COUNT ) {
		totalCombinations = defaults.DEFAULT_TOTAL_COMBINATIONS;
		occurenceMap = defaults.DEFAULT_OCCURENCE_MAP;
		rewardMap = defaults.DEFRAULT_REWARD_MAP
	} else {
		const cacheKey = `${redBallsCount},${blueBallsCount},${greenBallsCount},${drawCount}`;

		// calcualte total combinations
		let totalCombinationsCache = ls.get('totalCombinationsCache') || {};
		totalCombinations = totalCombinationsCache[cacheKey] || combinations(
			redBallsCount+blueBallsCount+greenBallsCount,
			drawCount);
	
		// get occurenceMap cache
		let occurenceMapCache = ls.get('occurenceMapCache') || {};
		let rewardMapCache = ls.get('rewardMapCache') || {}
	
		// calculte possible combinations
		occurenceMap = occurenceMapCache[cacheKey] || {};
		rewardMap = rewardMapCache[cacheKey] || {};
		let i=0, j=0, k=0;
		if( Object.keys(occurenceMap).length === 0 ) {
			for(i=data.drawCount; i>=data.drawCount/3; i--) {
				if(i > data.redBallsCount) continue;
				for(j=(data.drawCount-i); j>=(data.drawCount-i)/2; j--) {
					if(j > i) continue;
					if(j > data.blueBallsCount) continue;
					k = data.drawCount-i-j;
					if(k > data.greenBallsCount) continue;
					let occurrence = combinations(data.redBallsCount,i)*combinations(data.blueBallsCount,j)*combinations(data.greenBallsCount,k);
					if( i === j && i === k ) occurrence = occurrence;
					else if( i === j || i === k || j === k ) occurrence *= 3;
					else occurrence *= 6;
					occurenceMap[`${i},${j},${k}`] = occurrence;
					rewardMap[`${i},${j},${k}`] = 100;
					console.log(`Got ${i},${j},${k}`);
				}
			}
		}
	
		// store cache
		totalCombinationsCache[cacheKey] = totalCombinations;
		occurenceMapCache[cacheKey] = occurenceMap;
		rewardMapCache[cacheKey] = rewardMap;
		ls.set('totalCombinationsCache', totalCombinationsCache);
		ls.set('occurenceMapCache', occurenceMapCache);
		ls.set('rewardMapCache', rewardMapCache);
	}

	return (dispatch) => {
		dispatch({ type: types.UPDATE_BALLS_CONFIG, payload: {
			...data,
			totalCombinations,
			occurenceMap,
			rewardMap
		}});
	}
}

export function updateReward(ballsConfigData, data) {
	const {redBallsCount, blueBallsCount, greenBallsCount, drawCount} = ballsConfigData;
	const cacheKey = `${redBallsCount},${blueBallsCount},${greenBallsCount},${drawCount}`;

	// update rewardMap cache
	let rewardMapCache = ls.get('rewardMapCache') || {};
	let rewardMap = rewardMapCache[cacheKey] || {};
	rewardMap = {
		...rewardMap,
		...data
	}
	rewardMapCache[cacheKey] = rewardMap;
	ls.set('rewardMapCache', rewardMapCache);

	return (dispatch) => {
		dispatch({ type: types.UPDATE_REWARD, payload: data});
	}
}

export function clearCache(data) {
	ls.remove('totalCombinationsCache')
	ls.remove('occurenceMapCache');
	ls.remove('rewardMapCache');
}