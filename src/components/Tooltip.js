import React from 'react';

export default class Tooltip extends React.Component {

    render () {
        return (
            <div className="tooltip"
                 style={{left: this.props.x, top: this.props.y}}>
                {this.props.content}
            </div>
        );
    }
}