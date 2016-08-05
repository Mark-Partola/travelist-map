import React from 'react';

export default class AreaSelector extends React.Component {

    selectArea (event) {
        let target = event.target;
        this.props.onSelectArea(target.checked, target.value);
    }

    templateCreator () {

        let template = [];

        for (let area in this.props.areas) {

            if (!this.props.areas.hasOwnProperty(area)) continue;

            template.push(
                <div className="area-selector__item checker" key={area}>
                    <label className="checker__label">
                        <span>{this.props.areas[area].fullName}</span>
                        <input onChange={this.selectArea.bind(this)}
                               className="checker__box" type="checkbox"
                               value={area}/>
                    </label>
                </div>
            );
        }

        return template;
    }

    render () {
        return (
            <div className="area-selector">
                {this.templateCreator()}
            </div>
        );
    }
}