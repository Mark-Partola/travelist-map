import React from 'react';
import Utils from './../utils/utils';
import Tooltip from './Tooltip';

import WorldMap from './maps/world';
import EuropeMap from './maps/europe';

import RussiaMap from './maps/countries/russia';
import USAMap from './maps/countries/usa';
import IndiaMap from './maps/countries/india';
import GermanyMap from './maps/countries/germany';

export default class Map extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.isAdd = false;
        this.addSelectingArea = '';

        this.state = {
            mapTooltip: {
                content: '',
                x: 0,
                y: 0
            }
        };

        this._tooltipTimeout = 1000 / 15;
        this._previousStep = 0;

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
                areas: [
                    'BD', 'MN', 'BN', 'BH',
                    'BT', 'HK', 'JO', 'PS',
                    'LB', 'LA', 'TW',
                    'TR', 'LK', 'TL', 'TM',
                    'TJ', 'TH', 'NP',
                    'PK', 'PH', 'YE', 'AE',
                    'CN', 'AF', 'IQ', 'JP',
                    'IR', 'AM', 'SY', 'VN',
                    'GE', 'IL', 'IN', 'AZ',
                    'ID', 'OM', 'KG', 'UZ',
                    'MM', 'SG', 'KH', 'CY',
                    'QA', 'KR', 'KP', 'KW',
                    'KZ', 'SA', 'MY'
                ],
                viewBox: '-80 -20 850 430',
                transform: 'scale(0.7) translate(41, 0)'
            },
            {
                type: "oceania",
                name: "Австралия и Океания",
                areas: [
                    'GU', 'PW', 'KI', 'NC',
                    'NU', 'NZ', 'AU', 'PG',
                    'SB', 'PF', 'FJ', 'FM',
                    'WS', 'VU'
                ],
                viewBox: '-120 120 800 457'
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

        /**
         * TODO: перевести на генерацию все
         */
        if (this.availableMaps[i].areas) {
            return this.getGeneratedMap(this.availableMaps[i]);
        } else {
            return this.availableMaps[i].el;
        }
    }

    getGeneratedMap(mapConfig) {
        let template, paths;

        paths = mapConfig.areas.map((code, index) => {

            return (
                <path //onMouseMove={this.onMouseMove.bind(this)}
                      key={index}
                      d={this.props.areas[code].path}
                      data-code={code}
                      className="map-area"
                      //onMouseEnter={this.toggleTooltip.bind(this, true)}
                      //onMouseLeave={this.toggleTooltip.bind(this, false)}
                      onClick={this.onClick.bind(this)} />
            );
        });

        template = (
            <svg viewBox={mapConfig.viewBox}>
                <g transform={mapConfig.transform}>
                    {paths}
                </g>
            </svg>
        );

        return template;
    }

    toggleTooltip(enable) {
        document.querySelector('.tooltip')
            .style.display = enable ? "block" : "";
    }

    onMouseMove(event) {
        let code = event.target.getAttribute('data-code');
        let tooltipText = this.props.areas[code].fullName;

        if ((Date.now()) - this._previousStep > this._tooltipTimeout) {
            this.setState({
                mapTooltip: {
                    content: tooltipText,
                    x: event.screenX + 20,
                    y: event.screenY - 50
                }
            });

            this._previousStep = Date.now();
        }

    }

    onClick(event) {
        let action = !event.target.classList.contains('map-area--selected');
        this.props.onSelectArea(action, event.target.getAttribute('data-code'));
    }

    getCats() {
        return this.availableMaps.map((map, index) => {
            return <a className="map-cats__item"
                      key={index}
                      onClick={this.onChangeMap.bind(this, map.type)}>{map.name}</a>
        });
    }

    render () {
        return (
            <div className="map-component" ref="componentRoot">
                <div className="map-component__cats map-cats">
                    {this.getCats()}
                </div>

                <div className="map-container">
                    {this.getSelectedMap(this.props.map)}
                </div>

                <Tooltip x={this.state.mapTooltip.x}
                         y={this.state.mapTooltip.y}
                         content={this.state.mapTooltip.content} />
            </div>
        );
    }
}