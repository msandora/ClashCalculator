import React from 'react'

class Unit extends React.Component {
    state = {count: 0}

    _increment = e => {
        e.preventDefault();
        this.setState({count: this.state.count + 1 }, this.props.handleIncrement);
    }

    _decrement = e => {
        e.preventDefault();
        this.setState({count: this.state.count - 1 }, this.props.handleDecrement);
    }
    _reset = e => {
        e.preventDefault();
        this.setState({count: 0}, this.props.handleReset)
    }

    render() { 
        return ( 
            <div>
                <span><b>{this.props.children}  | Total Housing: {this.props.totalUnitHousing}</b></span>
                <div>
                    <input type="text" pattern="[0-9]*" name="Unit Count" value={this.state.count}/>
                    <button onClick={this._increment}>+</button>
                    <button onClick={this._decrement}>-</button>
                    <button onClick={this._reset}>Reset</button>
                </div>
            </div> 
        );
    }
}

export default Unit;