import logo from './logo.svg';
import './App.css';
import Chart, { CARDS } from './components/Chart/Chart';
import { useState } from 'react';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'normalize.css';


// size: selects w & h of Card using corresponding .size-n class.
// len: length of row, max amount of tiles.
// pad_mult: 4 element array containing padding multipler. 
// pad_mult example: padding=3, pad_mult=[1, 2, 3, 1] -> padding="3px 6px 9px 3px"

// todo: impl this
const ROWS_SIZE42 = [
  {size: "150", len: 5, pad_mult: [1, 1, 3, 1]},
  {size: "150", len: 5, pad_mult: [1, 1, 3, 1]},
  {size: "125", len: 6, pad_mult: [1, 1, 3, 1]},
  {size: "125", len: 6, pad_mult: [1, 1, 3, 1]},
  {size: "75", len: 10, pad_mult: [1, 1, 1, 1]},
  {size: "75", len: 10, pad_mult: [1, 1, 1, 1]}
];


function App() {
  const [chartPadding, setChartPadding] = useState(2);
  const [cards, setCards] = useState(CARDS);

  const handlePaddingChanged = (event) => {
    setChartPadding(event.target.valueAsNumber);
  }


  return (
    // transform: scale(1.33);

    <div className="App">
      <input type="range" min="0" max="20" defaultValue="2" onChange={handlePaddingChanged}>
      </input>
      <span>{chartPadding}</span>
      <DndProvider backend={HTML5Backend}>
        <div id="chart-wrapper" style={{background: "center center rgb(0, 0, 0)"}}>
          <Chart padding={chartPadding} cards={cards} rows={ROWS_SIZE42} size={42}></Chart>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
