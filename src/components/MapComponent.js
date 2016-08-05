import React from 'react';
import Utils from './../utils/utils';

import WorldMap from './maps/world';
import EuropeMap from './maps/europe';
import AsiaMap from './maps/asia';
import OceaniaMap from './maps/oceania';

import RussiaMap from './maps/countries/russia';
import USAMap from './maps/countries/usa';
import IndiaMap from './maps/countries/india';
import GermanyMap from './maps/countries/germany';

export default class Map extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.isAdd = false;
        this.addSelectingArea = '';

        this.availableMaps = [
            {
                type: "world",
                name: "Мир",
                el: <WorldMap />
            },
            {
                type: "europe",
                name: "Европа",
                el: <EuropeMap />
            },
            {
                type:"russia",
                name: "Россия",
                el: <RussiaMap />
            },
            {
                type: "usa",
                name: "США",
                el: <USAMap />
            },
            {
                type: "germany",
                name: "Германия",
                el: <GermanyMap />
            },
            {
                type: "india",
                name: "Индия",
                el: <IndiaMap />
            },
            {
                type: "asia",
                name: "Азия",
                el: <AsiaMap />
            },
            {
                type: "oceania",
                name: "Австралия и Океания",
                el: <OceaniaMap />
            }
        ];
    }

    componentWillReceiveProps (nextProps) {
        let selectedCount = this.props.selectedAreas.length;
        this.isAdd = selectedCount - nextProps.selectedAreas.length < 0;
        this.addSelectingArea = Utils.subtract(
            this.props.selectedAreas,
            nextProps.selectedAreas
        );
    }

    componentDidUpdate () {
        let foundOnMap = this.refs.componentRoot
            .querySelector(`[data-code="${this.addSelectingArea}"]`);

        if (foundOnMap) {
            foundOnMap.classList[this.isAdd ? 'add' : 'remove']('map-area--selected');
        }
    }

    onChangeMap(type, event) {
        event.preventDefault();
        this.props.onChangeMap(type);
    }

    getSelectedMap(type) {
        let i;
        for(i = 0; i < this.availableMaps.length; i++) {
            if (this.availableMaps[i].type === type) {
                break;
            }
        }
        return this.availableMaps[i].el;
    }

    getCats() {
        return this.availableMaps.map((map, index) => {
            return <a className="map-cats__item" key={index}
                      onClick={this.onChangeMap.bind(this, map.type)}>{map.name}</a>
        });
    }

    render () {
        return (
            <div className="map-component" ref="componentRoot">
                <div className="map-component__cats map-cats">
                    {this.getCats()}
                </div>

                {this.getSelectedMap(this.props.map)}
            </div>
        )
    }
}