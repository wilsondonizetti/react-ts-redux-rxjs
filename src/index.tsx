import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import FirstComponent from './FirstComponent';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      teste: 'Teste'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <FirstComponent teste={this.state.teste} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
