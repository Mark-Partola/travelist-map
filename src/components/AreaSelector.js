import React from 'react';

export default class AreaSelector extends React.Component {

    selectArea (event) {
        let target = event.target;
        this.props.onSelectArea(target.checked, target.value);
    }

    templateCreator () {

        return this.props.areas.map((abbr, index) => {
            var name, value;

            if (typeof abbr === 'object') {
                name = abbr.code;
                value = abbr.fullName;
            } else {
                name = abbr;
                value = abbr;
            }

            return (
                <div className="area-selector__item checker" key={index}>
                    <label className="checker__label">
                        <span>{value}</span>
                        <input onChange={this.selectArea.bind(this)}
                               className="checker__box" type="checkbox"
                               value={name}/>
                    </label>
                </div>
            );
        });
    }

    render () {
        return (
            <div className="area-selector">
                {this.templateCreator()}
            </div>
        );
    }
}