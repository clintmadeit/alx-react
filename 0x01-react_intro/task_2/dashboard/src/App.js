import logo from './logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
    </div>
    <div className="App-body">
          <p>Login to access the full dashboard</p>
            <form>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" />
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" name="password" />
              <button type="submit">OK</button>
            </form>

      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
      </>
  );
}

export default App;
