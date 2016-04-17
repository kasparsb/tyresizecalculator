import React from 'react';

import {Tyre} from './tyre';

export class CompareResults extends React.Component {
    render() {

        var firstRow = true;
        var firstCol = true;

        return (
            <div className="compare-results">
                <div className="compare-results__wrap">
                    <label className="compare-results__label compare-results__label--x">Width</label>
                    <label className="compare-results__label compare-results__label--y">Height</label>
                    <table className="compare-results__table">
                        <tbody>
                        <tr>
                            <td key={0} className="compare-results__td compare-results__tdy compare-results__tdempty"></td>
                            {this.props.widths.map(width => (
                                <td key={'width-'+width.value} className="compare-results__td compare-results__tdx compare-results__tdlabel">{width.caption}</td>
                            ))}
                        </tr>

                        {this.props.heights.map(height => {
                            return (
                                <tr key={height.value}>
                                    <td key={'height-'+height.value} className="compare-results__td compare-results__tdy compare-results__tdlabel">{height.caption}</td>
                                    {this.props.widths.map(width => {


                                        var t = new Tyre(width.value, height.value, this.props.newDiameter);

                                        return (
                                            <td key={width.value+'-'+height.value} className="compare-results__td compare-results__tdvalue">{t.totalHeight() - this.props.original.totalHeight()}</td>
                                        )

                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}