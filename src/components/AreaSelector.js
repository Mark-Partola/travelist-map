import React from 'react';
import AreaCard from '../components/AreaCard';

export default class AreaSelector extends React.Component {

    selectArea (event) {
        let target = event.target;
        this.props.onSelectArea(target.checked, target.value);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.map !== this.props.map) {
            this.refs["area-search"].value = "";
        }
    }

    templateCreator () {

        let template = [];

        for (let code in this.props.areas) {

            if (!this.props.areas.hasOwnProperty(code)) continue;

            let isChecked = !!this.props.selectedAreas.includes(code);

            template.push(
                <AreaCard
                    key={code}
                    title={this.props.areas[code].fullName}
                />
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
                           onKeyUp={this.onKeyUp.bind(this)}
                           ref="area-search"/>
                </div>
                <div className="area-selector">
                    {this.templateCreator()}
                </div>
            </div>
        );
    }
}