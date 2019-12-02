import React from 'react'
import Unit from './Unit'

class Units extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "Units List",
            totalUnitCount: 0,
            totalUnitHousing: 0,
            totalUnitCap: 100,
            units: [
                { key: 0, name: "B", unitCount: 0, totalUnitHousing: 0, housing: 1 },
                { key: 1, name: "A", unitCount: 0, totalUnitHousing: 0, housing: 1 },
                { key: 2, name: "G", unitCount: 0, totalUnitHousing: 0, housing: 5 },
                { key: 3, name: "W", unitCount: 0, totalUnitHousing: 0, housing: 4 },
                { key: 4, name: "H", unitCount: 0, totalUnitHousing: 0, housing: 14 },
                { key: 5, name: "D", unitCount: 0, totalUnitHousing: 0, housing: 20 },
                { key: 6, name: "P", unitCount: 0, totalUnitHousing: 0, housing: 25 },
                { key: 7, name: "M", unitCount: 0, totalUnitHousing: 0, housing: 2 },
                { key: 8, name: "V", unitCount: 0, totalUnitHousing: 0, housing: 8 },
                { key: 9, name: "E", unitCount: 0, totalUnitHousing: 0, housing: 30 },
            ]
        }
    }

    handleIncrement = (index) => {
        /* Copys original Array */
        var stateCopy = Object.assign({}, this.state);
        /* Grabs only the units part of the array */
        stateCopy.units = stateCopy.units.slice();
        /* Assigns index to new array */
        stateCopy.units[index] = Object.assign({}, stateCopy.units[index]);
        /* Define Unit Cap */
        let totalUnitCap = stateCopy.totalUnitCap;

        if(stateCopy.totalUnitHousing < totalUnitCap + 1) {
            /* increments INDIVIDUAL unit housing */
            stateCopy.units[index].totalUnitHousing += stateCopy.units[index].housing;
            /* increments TOTAL unit housing */
            stateCopy.totalUnitHousing = stateCopy.totalUnitHousing += stateCopy.units[index].housing;

            this.setState(stateCopy);
        }
        if(stateCopy.totalUnitHousing > totalUnitCap) {
            document.getElementById('totalUnitHousing').style.color = 'red';
        }
    }

    handleDecrement = (index) => {
        /* Copys original Array */
        var stateCopy = Object.assign({}, this.state);
        /* Grabs only the units part of the array */
        stateCopy.units = stateCopy.units.slice();
        /* Assigns index to new array */
        stateCopy.units[index] = Object.assign({}, stateCopy.units[index]);
        /* Define Unit Cap */
        let totalUnitCap = stateCopy.totalUnitCap;

        /* increments INDIVIDUAL unit housing */
        stateCopy.units[index].totalUnitHousing -= stateCopy.units[index].housing;
        /* increments TOTAL unit housing */
        stateCopy.totalUnitHousing = stateCopy.totalUnitHousing -= stateCopy.units[index].housing;
        this.setState(stateCopy);

        if(stateCopy.totalUnitHousing < totalUnitCap + 1) {
            document.getElementById('totalUnitHousing').style.color = 'black';
        }
    }

    handleReset = (index) => {
        this.setState({
            totalUnitCount: 0,
            totalUnitHousing: 0,
        });
        document.getElementById('totalUnitHousing').style.color = 'black';
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.title}</h1>
                {
                    this.state.units.map((unit, index)=>{
                        return (
                            <Unit 
                                key={unit.key}
                                unitCount={unit.unitCount} 
                                totalUnitHousing={unit.totalUnitHousing}
                                handleIncrement={this.handleIncrement.bind(this, index)}
                                handleDecrement={this.handleDecrement.bind(this, index)}
                                handleReset={this.handleReset.bind(this, index)}> {unit.name}</Unit> 
                        )
                    })
                }
                <h3><span id="totalUnitHousing">{this.state.totalUnitHousing}</span> / {this.state.totalUnitCap}</h3>
            </div>
        )
        
    }
}
 
export default Units;