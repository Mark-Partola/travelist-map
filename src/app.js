import React from 'react'
import { render } from 'react-dom'
import MapContainer from './containers/MapContainer';

render(
    <MapContainer />,
    document.querySelector('.map-component')
);