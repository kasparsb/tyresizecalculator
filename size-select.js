import React from 'react';

export class SizeSelect extends React.Component {
    render() {
        var click = (value) => {
            return () => {
                this.props.onClick(value)
            }
        }
        return (
            <div className="size-select">
                {this.props.items.map(item => {
                    var classNames = ['size-select__item'];
                    if (item.selected) {
                        classNames.push('size-select__item--selected')
                    }
                    return (
                        <div 
                            key={item.value} 
                            className={classNames.join(' ')}
                            onClick={click(item)}
                            >{item.caption}</div>
                    )
                })}
            </div>
        )
    }
}