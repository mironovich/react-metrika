import React, { Component } from 'react'
import './App.css'
import Metrika from './api/metrika'

const ym = new Metrika()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    let token = /access_token=([^&]+)/.exec(document.location.hash)
    token = token && token[1]
    token && this.setState({ token })
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
         Антон меняет пароли<br /><br />
          <a href={ym.auth}> AUTH</a>
          {this.state.token && ym.getData(this.state.token)}
        </p>
      </div>
    )
  }
}

export default App
