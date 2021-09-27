import { shape, bool, string, number, arrayOf, object } from 'prop-types';

export const ballsConfigDataType = shape({
	redBallsCount: number.isRequired,
	blueBallsCount: number.isRequired,
	greenBallsCount: number.isRequired,
	drawCount: number.isRequired,
	totalCombinations: number.isRequired,
	occurenceMap: object.isRequired,
	rewardMap: object.isRequired
});
