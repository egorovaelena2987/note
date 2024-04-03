
import './App.css';
import image from './flower.jpeg';
import imageTwo from './checklist.jpeg';
import { Notes } from './Notes';


function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={ image } width="250px" alt="flower"/>
      </div>
      <div className="container">
      <h1>My Notes</h1>
      </div>
      <Notes />
      <div className="container">
      <img src={ imageTwo } width="250px" alt="checklist"/>
      </div>
    </div>
  );
}

export default App;
