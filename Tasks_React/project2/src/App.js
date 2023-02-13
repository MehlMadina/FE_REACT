import { useState } from "react";
import "./App.css";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });

  // const leftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1,
  //   };
  //   setClicks(newClicks);
  // };

  // const rightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1,
  //   };
  //   setClicks(newClicks);
  // };

  const leftClick = () => {
    setLeft(left + 1);
    // setAllClicks(allClicks.concat('L'));
    setAllClicks([...allClicks, 'L']);
  }

  const rightClick = () => {
    setRight(right + 1);
    // setAllClicks(allClicks.concat('R'));
    setAllClicks([...allClicks, 'R']);
  }

  return (
    <div className="App">
      {left}
      <button onClick={leftClick}>left</button>
      <button onClick={rightClick}>right</button>
      {right}
      <p>История кликов: {allClicks.join(' ')}</p>
    </div>
  );
}

export default App;
