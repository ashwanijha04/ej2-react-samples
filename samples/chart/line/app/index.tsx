/**
 * Sample for Line Series
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    LineSeries, DateTime, Legend, Tooltip, ILoadedEventArgs, ChartTheme
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';

export let data1: any[] = [
    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
];
export let data2: any[] = [
    { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 }, { x: new Date(2011, 0, 1), y: 84 }
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
        .charts {
            align :center
        }`;
export class Line extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <ChartComponent id='charts' style={{ textAlign: "center" }}
                        primaryXAxis={{
                            valueType: 'DateTime',
                            labelFormat: 'y',
                            intervalType: 'Years',
                            edgeLabelPlacement: 'Shift',
                            majorGridLines: { width: 0 }
                        }}
                        load={this.load.bind(this)}
                        primaryYAxis={{
                            labelFormat: '{value}%',
                            rangePadding: 'None',
                            minimum: 0,
                            maximum: 100,
                            interval: 20,
                            lineStyle: { width: 0 },
                            majorTickLines: { width: 0 },
                            minorTickLines: { width: 0 }
                        }}
                        chartArea={{ border: { width: 0 } }}
                        tooltip={{ enable: true }}
                        width={Browser.isDevice ? '100%' : '60%'}
                        title='Inflation - Consumer Price' loaded={this.onChartLoad.bind(this)}>
                        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='x' yName='y' name='Germany'
                                width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data2} xName='x' yName='y' name='England'
                                width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        )
    }
    public onChartLoad(args: ILoadedEventArgs): void {
        let  chart:  Element  =  document.getElementById('charts');
        chart.setAttribute('title',  '');
    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
    };
}

ReactDOM.render(<Line />, document.getElementById('sample'));