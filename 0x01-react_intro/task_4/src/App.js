import logo from './logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <>
    <Notifications />
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
    </div>
    <div className="App-body">
          <p>Login to access the full dashboard</p>
            <form className="login-form">
              <label htmlFor="email" className="label-email">Email: </label>
              <input type="email" id="email" name="email" />
              <label htmlFor="password" className="label-password">Password: </label>
              <input type="password" id="password" name="password" />
              <button type="submit" className="ok-button">OK</button>
            </form>

      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
      </>
  );
}

export default App;
