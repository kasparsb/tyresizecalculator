import React from 'react';

import {SizeSelect} from './size-select';
import {CompareResults} from './compare-results';

import {Tyre} from './tyre';

global.Tyre = Tyre;

export class Calculator extends React.Component {
    constructor() {
        super();

        this.state = {
            original: {
                width: 215,
                height: 65,
                radius: 16,
            },

            new: {
                diameter: 19
            },

            size: {
                width: this.getWidthItems(215),
                height: this.getHeightItems(65),
                radius: this.getRadiusItems(16),
                newDiameter: this.getNewDiameterItems(19)
            }
        }

        this.handleWidthClick = this.handleWidthClick.bind(this)
        this.handleHeightClick = this.handleHeightClick.bind(this)
        this.handleRadiusClick = this.handleRadiusClick.bind(this)
        this.handleNewDiameterClick = this.handleNewDiameterClick.bind(this)
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
    getRadiusItems(selected) {
        return this.generateItems(13, 24, 1, i => this.formatSize(i, i, selected));
    }
    getNewDiameterItems(selected) {
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
    handleRadiusClick(item) {
        this.state.original.radius = item.value;
        this.state.size.radius = this.getRadiusItems(item.value)
        this.setState({
            original: this.state.original,
            size: this.state.size
        })
    }
    handleNewDiameterClick(item) {
        this.state.new.diameter = item.value;
        this.state.size.newDiameter = this.getNewDiameterItems(item.value)
        this.setState({
            new: this.state.new,
            size: this.state.size
        })        
    }

    render() { 

        return (
            <div className="calculator">
                <SizeSelect items={this.state.size.width} onClick={this.handleWidthClick} />
                <SizeSelect items={this.state.size.height} onClick={this.handleHeightClick} />
                <SizeSelect items={this.state.size.radius} onClick={this.handleRadiusClick} />
                <SizeSelect items={this.state.size.newDiameter} onClick={this.handleNewDiameterClick} />
                <CompareResults 
                    widths={this.state.size.width} 
                    heights={this.state.size.height} 
                    original={new Tyre(this.state.original.width, this.state.original.height, this.state.original.radius)}
                    newDiameter={this.state.new.diameter}
                    />
            </div>
        )
    }
}