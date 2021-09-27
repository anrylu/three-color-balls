import { shape, number, object } from 'prop-types';

export const ballsConfigDataType = shape({
	redBallsCount: number.isRequired,
	blueBallsCount: number.isRequired,
	greenBallsCount: number.isRequired,
	drawCount: number.isRequired,
	totalCombinations: number.isRequired,
	occurenceMap: object.isRequired,
	rewardMap: object.isRequired
});
