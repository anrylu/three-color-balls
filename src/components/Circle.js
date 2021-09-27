import React from 'react';

class Circle extends React.Component {
	render() {
        var circleStyle = {
            padding: 0,
            marginTop: 3,
            marginBottom: 3,
            display:"inline-block",
            // position:'absolute',
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width:30,
            height:30,
            left:0,
            top:0
        };
        return (
            <div style={circleStyle}>
            </div>
        );
    }
}

export default Circle;
