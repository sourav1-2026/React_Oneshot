import './App.css';

function App() {

  let name= 'react-app'
  console.log("app")
  return (
    <div className="App">
      <div className="App-header">
        Hello world {name}
        <Demo />
      </div>

    </div>
  );
}

function Demo() {
  console.log("Demo")
  return (
      <div className="App-header">
        Hello world demo
      </div>
  );
}

export default App;
