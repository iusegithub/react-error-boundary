import './App.css';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
     <h1>Buggy Counter</h1>
      <ErrorBoundary>     
        <BuggyCounter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
