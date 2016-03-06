import React from 'react';

export class CompareResults extends React.Component {
    render() {

        var firstRow = true;
        var firstCol = true;

        return (
            <table style={{border:'1px solid gray'}}>
                <tbody>
                <tr>
                    <td key={0}></td>
                    {this.props.width.map(width => <td key={'width-'+width.value}>{width.caption}</td>)}
                </tr>

                {this.props.height.map(height => {
                    return (
                        <tr key={height.value}>
                            <td key={'height-'+height.value}>{height.caption}</td>    
                            {this.props.width.map(width => <td key={width.value+'-'+height.value}></td>)}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}