import React from 'react';
import ReactHighCharts from 'react-highcharts';

import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import highchartsConfig from './HighchartsConfig';
import Highchartstheme from './Highchartstheme';
import ChartSelect from './ChartSelect';

ReactHighCharts.Highcharts.setOptions(Highchartstheme);

export default function() {
    return <AppContext.Consumer>
        {({historical, changeChartSelect}) =>
            <Tile>
                <ChartSelect
                    defaultValue={"months"}
                    onChange={e => changeChartSelect(e.target.value)}

                >
                    <option value="days"> Days </option>
                    <option value="weeks"> Weeks </option>
                    <option value="months"> Months </option>
                </ChartSelect>
                {historical ?
                    <ReactHighCharts config={highchartsConfig(historical)}/>
                    : <div> Loading Historical Data </div>
                }
            </Tile>
        }
    </AppContext.Consumer>
}

