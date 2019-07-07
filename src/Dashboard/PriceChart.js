import React from 'react';
import ReactHighCharts from 'react-highcharts';

import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import highchartsConfig from './HighchartsConfig';
import HighChartstheme from './Highchartstheme';

ReactHighCharts.Highcharts.setOptions(HighChartstheme);

export default function() {
    return <AppContext.Consumer>
        {({}) =>
            <Tile>
                <ReactHighCharts config={highchartsConfig()}/>
            </Tile>
        }
    </AppContext.Consumer>
}

