import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func } from 'prop-types';

import { ballsConfigDataType } from '../types';
import { updateReward } from '../actions/BallsConfigActions';

class Reward extends React.Component {
	constructor() {
		super();
		this.handleFormChange = this.handleFormChange.bind(this);
	}

    handleFormChange(event) {
		const inputText = event.target.value;
		this.props.updateReward(
            this.props.ballsConfigData,
            {[event.target.id]: Number(inputText)});
	}

	render() {
		const {
			occurenceMap, rewardMap, totalCombinations
		} = this.props.ballsConfigData;

        const renderBody = [];
        let totalExpectation = 0;
        Object.keys(occurenceMap).forEach(function(key) {
            const probability = occurenceMap[key]/totalCombinations
            const expectation = rewardMap[key]*probability;
            totalExpectation += expectation;
            return renderBody.push(<tr key={key}>
                <td>{key}</td>
                <td>{occurenceMap[key]}</td>
                <td>{probability}</td>
                <td><input id={key} type="number" maxLength="5" min="-99999" max="99999" style={{width: "120px"}} value={rewardMap[key]} onChange={this.handleFormChange} /></td>
                <td>{expectation}</td>
            </tr>);
        }.bind(this));
        renderBody.push(<tr key="total">
            <td></td>
            <td>{totalCombinations}</td>
            <td>1</td>
            <td></td>
            <td>{totalExpectation}</td>
        </tr>);

        return (
            <table>
                <thead>
                    <tr>
                        <th>方式</th>
                        <th>組數</th>
                        <th>機率</th>
                        <th>獎金</th>
                        <th>期望值</th>
                    </tr>
                </thead>
                <tbody>{renderBody}</tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
	return {
		ballsConfigData: state.ballsConfigData
	};
}

function mapDispatchToProps(dispatch) {
	return {
        updateReward: bindActionCreators(updateReward, dispatch)
    };
}

Reward.propTypes = {
	ballsConfigData: ballsConfigDataType.isRequired,
	updateReward: func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Reward);
