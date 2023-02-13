import { useState } from "react";
import "./App.css";

function App() {

  const [notes, setNotes] = useState([
  {
    id: 1,
    text: 'React Router Dom'
  },
  {
    id: 2,
    text: 'Axios vs Fetch'
  },
]);
  
  return (
    <div className="App">
      <h1>Темы занятий</h1>
      <ul>
        {
          notes.map(note => <li key={note.id}>{note.text}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
