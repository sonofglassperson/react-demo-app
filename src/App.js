import './App.css';

function App() {
  return (
    <div className="App">
      <header clas sName="App-header">
            <h1>
                First React app: Different environments
            </h1>
            <h2>
                {process.env.REACT_APP_NODE_ENV}
            </h2>
            <h2>
                ENV: {process.env.REACT_APP_NODE_ENV}
            </h2>
            
      </header>
    </div>
  );
}

export default App;
