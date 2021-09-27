import logo from './logo.svg';
import './App.css';

import BallsConfig from './components/BallsConfig';

function App() {
  return (
    <div className="App">
      <BallsConfig></BallsConfig>
      <table>
        <tbody>
          <tr colSpan="9"><td>獎金</td></tr>
        </tbody>
      </table>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
