import React, { Component } from 'react';
import './sortingVisualizer.css';
import MergeSort from "./Algorithms/MergeSort";


var SIZE = 290;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 3;


class SortingVisualizer extends Component{
    
    constructor(){
        super()
        this.state={
            array : []
        };
    }
    
    componentWillMount(){
        this.resetArray();
    }
    
    resetArray(){
        const array =[]
        
        for(let i=0; i<(SIZE-1); i++ ){
        array.push(this.randomNumber(6,600));
        }
        array.push(600);
        this.setState({array});

    }

    randomNumber(minimum, maximum){
        return Math.round( Math.random() * (maximum - minimum) + minimum);
    }
    mergeSort() {
        const animations = MergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }

    quickSort(){}   
    heapSort() {}  
    bubbleSort() {}

    render(){
        const {array} = this.state;
        return(
           <div>
            <div className="arrays">
              {array.map((value,idx) => (
                  <div 
                  className="array-bar" 
                  key={idx}
                  style={{height:`${value}px`}}
                  ></div>
              ))}
            </div>
            <div className="Navbar">
                 <button className="gen-button" onClick={()=>this.resetArray()}>Genrate New Array</button> 
                 <div className="separator"></div>
                 <button className="sort-button" onClick={()=>this.mergeSort()}>Merge Sort</button>
                 <button className="sort-button" onClick={()=>this.mergeSort()}>Quick Sort</button>  
                 <button className="sort-button" onClick={()=>this.mergeSort()}>Heap Sort</button>
                 <button className="sort-button" onClick={()=>this.mergeSort()}>Bubble Sort</button>
                 <div className="separator"></div>
            </div>
           </div>
        );
    }
}

export default SortingVisualizer
