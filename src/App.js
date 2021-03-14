import './App.css';
import SpreadOperator from './components/SpreadOperator';
import WithoutSpreadOperator from './components/WithoutSpreadOperator';

function App() {
  return (
    <div className="App">
      <p>This is the example with setting object state without spread operator</p>
      <WithoutSpreadOperator />
      <p>This is the example with setting object state with spread operator</p>
      <SpreadOperator />
    </div>
  );
}

export default App;
