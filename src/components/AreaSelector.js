import React from 'react';

export default class AreaSelector extends React.Component {

    selectArea (event) {
        let target = event.target;
        this.props.onSelectArea(target.checked, target.value);
    }

    templateCreator () {

        let template = [];

        for (let code in this.props.areas) {

            if (!this.props.areas.hasOwnProperty(code)) continue;

            let isChecked = !!this.props.selectedAreas.includes(code);

            template.push(
                <div className="area-selector__item checker" key={code}>
                    <label className="checker__label">
                        <span>{this.props.areas[code].fullName}</span>
                        <input onChange={this.selectArea.bind(this)}
                               checked={isChecked}
                               className="checker__box"
                               type="checkbox"
                               value={code} />
                    </label>
                </div>
            );
        }

        return template;
    }

    onKeyUp(event) {
        this.props.filterAreas(event.target.value);
    }

    render () {
        return (
            <div>
                <div className="area-search">
                    <input className="area-search__input"
                           type="text"
                           onKeyUp={this.onKeyUp.bind(this)} />
                </div>
                <div className="area-selector">
                    {this.templateCreator()}
                </div>
            </div>
        );
    }
}