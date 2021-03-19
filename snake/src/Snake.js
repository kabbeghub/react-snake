import React, {useState} from 'react';

export const Snake = () => {

    const [grid, setGrid] = useState([]);

    const gridTemp = [];
    for(let row = 0; row < 10; row++){
        for(let col = 0; col < 10; col++){
            gridTemp.push({row,col});
            setGrid((grid => gridTemp));
        }
    }
    const gridItems = grid.map((grid) => {
        return <div 
          key={grid.row.toString() + '-' + grid.col.toString()} 
          className="grid-item" ></div>
      })
    

        return (
          <div className="snake-container">
            <div className="grid">{gridItems}</div>
          </div>
        )
      
}


