import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func } from 'prop-types';

import Circle from './Circle';
import DrawBallsIcon from '../images/draw_balls.png';
import { RED_COLOR, BLUE_COLOR, GREEN_COLOR} from '../constants/colors';
import { updateBallsConfig, clearCache } from '../actions/BallsConfigActions';

class BallsConfig extends React.Component {
	constructor() {
		super();
		this.handleApply = this.handleApply.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.state = {
            redBallsCount: 8,
            blueBallsCount: 8,
            greenBallsCount: 8,
            drawCount: 12
		};
	}

    handleApply() {
		this.props.updateBallsConfig(this.state);
	}

    handleFormChange(event) {
		const inputText = event.target.value;
        if( event.target.id === 'drawCount' ) {
            this.setState({
                [event.target.id]: Number(inputText),
            });
        } else {
            this.setState({
                redBallsCount: Number(inputText),
                blueBallsCount: Number(inputText),
                greenBallsCount: Number(inputText)
            });
        }
	}

	render() {
		const { redBallsCount, blueBallsCount, greenBallsCount, drawCount } = this.state;
        return (
            <table>
                <tbody>
                    <tr>
                        <td><Circle bgColor={RED_COLOR}></Circle></td>
                        <td><input id="redBallsCount" type="number" maxLength="2" min="1" max="99" style={{width: "60px"}} value={redBallsCount} onChange={this.handleFormChange} /></td>
                        <td><Circle bgColor={BLUE_COLOR}></Circle></td>
                        <td><input id="blueBallsCount" type="number" maxLength="2" min="1" max="99" style={{width: "60px"}} value={blueBallsCount} onChange={this.handleFormChange} /></td>
                        <td><Circle bgColor={GREEN_COLOR}></Circle></td>
                        <td><input id="greenBallsCount" type="number" maxLength="2" min="1" max="99" style={{width: "60px"}} value={greenBallsCount} onChange={this.handleFormChange} /></td>
                        <td><img src={DrawBallsIcon} style={{width: "30px", height: "30px"}} alt="取幾顆球?" /></td>
                        <td><input id="drawCount" type="number" maxLength="3" min="1" max="150" style={{width: "60px"}} value={drawCount} onChange={this.handleFormChange} /></td>
                        <td><button onClick={this.handleApply}>設定</button></td>
                        <td><button onClick={clearCache}>清快取</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
        updateBallsConfig: bindActionCreators(updateBallsConfig, dispatch)
    };
}

BallsConfig.propTypes = {
	updateBallsConfig: func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BallsConfig);
