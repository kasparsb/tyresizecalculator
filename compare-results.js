import React from 'react';

import {Tyre} from './tyre';

export class CompareResults extends React.Component {
    render() {

        var firstRow = true;
        var firstCol = true;

        return (
            <table className="results">
                <tbody>
                <tr>
                    <td key={0} className="results__td"></td>
                    {this.props.widths.map(width => <td key={'width-'+width.value}>{width.caption}</td>)}
                </tr>

                {this.props.heights.map(height => {
                    return (
                        <tr key={height.value}>
                            <td key={'height-'+height.value} className="results__td">{height.caption}</td>
                            {this.props.widths.map(width => {


                                var t = new Tyre(width.value, height.value, this.props.newDiameter);

                                return (
                                    <td key={width.value+'-'+height.value} className="results__td">{t.totalHeight() - this.props.original.totalHeight()}</td>
                                )

                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}