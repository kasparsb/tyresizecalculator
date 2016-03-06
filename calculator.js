import React from 'react';

import {SizeSelect} from './size-select';
import {CompareResults} from './compare-results';

export class Calculator extends React.Component {
    constructor() {
        super();

        this.state = {
            original: {
                width: 215,
                height: 65,
                diameter: 16,
            },

            size: {
                width: this.getWidthItems(215),
                height: this.getHeightItems(65),
                diameter: this.getDiameterItems(16)    
            }
        }

        this.handleWidthClick = this.handleWidthClick.bind(this)
        this.handleHeightClick = this.handleHeightClick.bind(this)
        this.handleDiameterClick = this.handleDiameterClick.bind(this)
    }
    generateItems(start, stop, step, cb) {
        var r = [];
        for (var i = start; i < stop; i=i+step) {
            r.push(cb(i));
        }
        return r;
    }
    formatSize(value, caption, selected) {
        return {
            caption: caption, 
            value: value,
            selected: value == selected
        }
    }
    getWidthItems(selected) {
        return this.generateItems(175, 315, 10, i => this.formatSize(i, i, selected));
    }
    getHeightItems(selected) {
        return this.generateItems(25, 85, 5, i => this.formatSize(i, i, selected));
    }
    getDiameterItems(selected) {
        return this.generateItems(13, 24, 1, i => this.formatSize(i, i, selected));
    }

    handleWidthClick(item) {
        this.state.original.width = item.value;
        this.state.size.width = this.getWidthItems(item.value)
        this.setState({
            original: this.state.original,
            size: this.state.size
        })
    }
    handleHeightClick(item) {
        this.state.original.height = item.value;
        this.state.size.height = this.getHeightItems(item.value)
        this.setState({
            original: this.state.original,
            size: this.state.size
        })
    }
    handleDiameterClick(item) {
        this.state.original.diameter = item.value;
        this.state.size.diameter = this.getDiameterItems(item.value)
        this.setState({
            original: this.state.original,
            size: this.state.size
        })
    }

    render() { 
        return (
            <div className="calculator">
                <SizeSelect items={this.state.size.width} onClick={this.handleWidthClick} />
                <SizeSelect items={this.state.size.height} onClick={this.handleHeightClick} />
                <SizeSelect items={this.state.size.diameter} onClick={this.handleDiameterClick} />
                <CompareResults width={this.state.size.width} height={this.state.size.height} />
            </div>
        )
    }
}