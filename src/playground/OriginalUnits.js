import React from 'react'
import Unit from './Unit'

class Units extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = { 
            title: "Units List",
            totalUnitCount: 0,
            totalUnitCap: 100,
            units: [
                { key: 0, name: "B", unitCount: 0, housing: 1 },
                { key: 1, name: "A", unitCount: 0, housing: 1 },
                { key: 2, name: "G", unitCount: 0, housing: 5 },
                { key: 3, name: "W", unitCount: 0, housing: 4 },
                { key: 4, name: "H", unitCount: 0, housing: 14 },
                { key: 5, name: "D", unitCount: 0, housing: 20 },
                { key: 6, name: "P", unitCount: 0, housing: 25 },
                { key: 7, name: "M", unitCount: 0, housing: 2 },
                { key: 8, name: "V", unitCount: 0, housing: 8 },
                { key: 9, name: "E", unitCount: 0, housing: 30 },
            ]
        }
    }


    handleIncrement = (index) => {
        // Copys original Array
        var stateCopy = Object.assign({}, this.state);
        // Grabs only the units part of the array 
        stateCopy.units = stateCopy.units.slice();
        // Assigns index to new array
        stateCopy.units[index] = Object.assign({}, stateCopy.units[index]);






        let totalUnitCap = stateCopy.totalUnitCap;
        console.log("Unit Cap: " + totalUnitCap);




        // If Unit Count ( 0 ) is less that Unit Cap ( 100 )
        if(stateCopy.totalUnitCount < totalUnitCap) {
            // increments INDIVIDUAL unit count
            stateCopy.units[index].unitCount += stateCopy.units[index].housing;
            // increments TOTAL unit count
            stateCopy.totalUnitCount = stateCopy.totalUnitCount += stateCopy.units[index].housing;



            let totalUnitCount = stateCopy.totalUnitCount;
            console.log("Unit Count: " + totalUnitCount);
    
            let totalUnitCap = stateCopy.totalUnitCap;
            console.log("Unit Cap: " + totalUnitCap);
            
            let totalUnitHousing = stateCopy.units[index].housing;
            console.log("Unit Housing: " + totalUnitHousing);





            this.setState(stateCopy);
        } 
    }

    handleDecrement = (index) => {
        // Copys original Array
        var stateCopy = Object.assign({}, this.state);
        // Grabs only the units part of the array 
        stateCopy.units = stateCopy.units.slice();
        // Assigns index to new array
        stateCopy.units[index] = Object.assign({}, stateCopy.units[index]);
        // If unit count & total count are > 0 then decrement
        if(stateCopy.units[index].unitCount > 0 && stateCopy.totalUnitCount > 0) {
            // decrements INDIVIDUAL unit count
            stateCopy.units[index].unitCount -= stateCopy.units[index].housing;
            // decrements TOTAL unit count
            stateCopy.totalUnitCount = stateCopy.totalUnitCount - stateCopy.units[index].housing;
            this.setState(stateCopy);
        }
    }
    
    handleReset = (index) => {
        this.setState();
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.title} : {this.state.totalUnitCount}</h1>
                {
                    this.state.units.map((unit, index)=>{
                        return (
                            <Unit 
                                handleIncrement={this.handleIncrement.bind(this, index)}
                                handleDecrement={this.handleDecrement.bind(this, index)}
                                handleReset={this.handleReset.bind(this, index)}
                                unitCount={unit.unitCount} 
                                key={unit.key}> {unit.name} </Unit> 
                        )
                    })
                }
            </div>
        )
        
    }
}
 
export default Units;