/**
 * Sample for Step Area series
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    Legend, StepAreaSeries, ILoadedEventArgs, ChartTheme
} from '@syncfusion/ej2-react-charts';
import { SampleBase } from './sample-base';
import { Browser } from '@syncfusion/ej2-base';

export let data: any[] = [{ x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 },
{ x: 2004, y: 449 }, { x: 2005, y: 470 }, { x: 2006, y: 437 }, { x: 2007, y: 458 },
{ x: 2008, y: 500 }, { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 509 }];
export let data1: any[] = [{ x: 2000, y: 180 }, { x: 2001, y: 240 }, { x: 2002, y: 370 }, { x: 2003, y: 200 },
{ x: 2004, y: 229 }, { x: 2005, y: 210 }, { x: 2006, y: 337 }, { x: 2007, y: 258 },
{ x: 2008, y: 300 }, { x: 2009, y: 173 }, { x: 2010, y: 220 }, { x: 2011, y: 309 }];
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

export class StepArea extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <ChartComponent id='charts' style={{ textAlign: "center" }}
                        primaryXAxis={{
                            valueType: 'Double',
                            majorGridLines: { width: 0 },
                            edgeLabelPlacement: 'Shift'
                        }}
                        load={this.load.bind(this)}
                        primaryYAxis={{
                            title: 'Production (Billion as kWh)',
                            valueType: 'Double',
                            majorGridLines: { width: 0 },
                            labelFormat: '{value}B'
                        }}
                        width={Browser.isDevice ? '100%' : '60%'}
                        chartArea={{ border: { width: 0 } }}
                        loaded={this.onChartLoad.bind(this)}
                        title='Electricity- Production'>
                        <Inject services={[StepAreaSeries, Legend]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} xName='x' yName='y' name='Renewable' width={2}
                                type='StepArea'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data1} xName='x' yName='y' name='Non-Renewable' width={2}
                                type='StepArea'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        )
    }
    public onChartLoad(args: ILoadedEventArgs): void {
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');

    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
    };
}
ReactDOM.render(<StepArea />, document.getElementById('sample'));