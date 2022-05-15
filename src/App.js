import React, { Component } from 'react'
import { Map } from './Map'
import { Registration } from './Registration'
import { Profile } from './Profile'
import { Login } from './Login'

import './App.css';

const PAGES = {
  map: Map,
  profile: Profile,
  registration: Registration,
  login: Login
}

class App extends Component {
  state = { currentPage: 'registration' }

  navigateToNextPage = (page) => {
      this.setState({ currentPage: page })
  }
  render() {
    const { currentPage } = this.state
    const Page = PAGES[currentPage]
      return (
          <>
            <main>
              <Page navigateToNextPage={this.navigateToNextPage}/>
            </main>
          </>
      )
  }
}



export default App;
