import React, { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import letterCollections from './letters/letterCollections';


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function applyLetter(grid, word, startRow, startColumn) {

    for(const letter of word){
        const letterGrid = letterCollections.get(letter)
        startColumn+=letterGrid[0].length
        for(let i=0;i<letterGrid.length;i++){
            for(let j=0;j<letterGrid[0].length;j++){
                if(letterGrid[i][j]===0){
                    grid[startRow+i][startColumn+j] = letterGrid[i][j] + 2
                }
            }
        }
    }

}

function initGrid(rows, columns, parameter){

    const myGrid = []
    for (let i = 0; i < rows; i++) {
        myGrid[i] = [];
        for (let j = 0; j < columns; j++) {
            myGrid[i][j] = 0;
        }
    }

    if(parameter){
        applyLetter(myGrid, "SOFTWARE ENGINEER", myGrid.length-10, -3)
        applyLetter(myGrid, "GUGLIELMO COLOMBO", myGrid.length-20, -3)
    }

    return myGrid
}


const FallingSand = () => {
    
    const rows = 30;
    const columns = 110;
    const [grid, setGrid] = useState(() => initGrid(rows, columns, true));
    const [start, setStart] = useState(0)
    const [reverse, setReverse] = useState(false)

    const tileStyle = {
        width: '8px',
        height: '8px',
        padding: '0',
        margin: '0',
    };

    
    useEffect(() => {
        const updateGrid = async () => {

            let iter = 0
            if(reverse){
                for (iter = start-1; iter>=0 && iter>start-10; iter--) {
                    if(Math.random() > 0.3)
                        grid[0][iter] = 1
                }
            } else {
                for (iter = start; iter<columns && iter < start+10; iter++) {
                    if(Math.random() > 0.3)
                        grid[0][iter] = 1
                }
            }
            setStart(iter)

            if (start == columns){
                setReverse(true)
            } else if(start==-1){
                setReverse(false)
            }

                    
            let updated = false
            let newGrid = initGrid(rows, columns, false)
            for (let i = rows-1; i >= 0; i--) {
                for (let j = columns-1; j >= 0; j--) {
                    const state = grid[i][j]
                    if(state==1){
                        let below = 1;
                        let belowA = 1;
                        let belowB = 1;
                        let direction = Math.random() < 0.5 ? -1 : 1

                        if(i+1<rows){
                            below = grid[i+1][j]
                            if(j+direction<columns){
                                belowA = grid[i+1][j+direction]
                            }
                            if(j+(-1)*direction >=0){
                                belowB = grid[i+1][j+(-1)*direction]
                            }
                        }
                        
                        if(below === 0){
                            newGrid[i+1][j] = 1
                            updated = true
                        } else if(below == 2){
                            let k = 1
                            while(grid[i+k][j]==2){
                                k++
                            }
                            if(grid[i+k][j] === 0){
                                newGrid[i+k][j] = 1
                                updated = true
                            } else if(grid[i+k][j] === 1){
                                newGrid[i][j] = 1
                                //updated = true
                            }
                        } else if(belowA === 0){
                            newGrid[i+1][j+direction] = 1
                            updated = true
                        } else if(belowB === 0){
                            newGrid[i+1][j+(-1)*direction] = 1
                            updated = true
                        } else {
                            newGrid[i][j] = grid[i][j]
                        }
                    } else {
                        newGrid[i][j] = grid[i][j]
                    }
                }
            }
            
            if(updated){
                await sleep(50)
                setGrid(newGrid)
            }
        };
    
        updateGrid();
      }, [grid]);


    return (
        <>
            {
                grid.map( (row, rowIndex) =>
                    <Row key={rowIndex} className="m-0 p-0" style={{ width: '100%' }}> {row.map( (col, colIndex) => {
                        const color = col === 1 ? "black" : "white"
                        return <Col key={colIndex} style={{ ...tileStyle, backgroundColor: color }} xs="auto"></Col>
                        }
                    )}
                    </Row>)
            }
        </>
    )
}

export default FallingSand;