import { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Button from 'app/controls/Button';
import Form from 'app/form/Form'
import NewComponent from 'app/NewComponent'
import styles from 'app/app.module.scss'
import 'app/main.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Link to="/">Main</Link>
          <Link to="/today">Today</Link>
          <Link to="/new" style={{color: 'red'}}>NEW</Link>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <Form />
        <Route path='/today' component={() => <div>TODAY!!!!!</div>} />
        <Route path='/new' component={NewComponent} />
      </div>
    );
  }
}

export default App;
