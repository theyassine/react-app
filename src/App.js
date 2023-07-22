import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

function App() {
  let name="yassine"
  return (
    <div className="App">
my name is yassine <Navbar name={name}/>
    </div>
  );
}

export default App;
