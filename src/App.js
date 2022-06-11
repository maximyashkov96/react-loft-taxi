import React, { Component } from 'react'
import { Map } from './pages/Map/Map'
import { RegistrationWithAuth } from './pages/Registration/Registration'
import { ProfileWithAuth } from './pages/Profile/Profile'
import { HomeWithAuth }  from './pages/Home/Home'
import { withAuth } from './AuthContext'

import './App.css';

const PAGES = {
  map: (props) => <Map {...props}/>,
  profile: (props) => <ProfileWithAuth {...props} />,
  registration: (props) => <RegistrationWithAuth {...props} />,
  home: (props) => <HomeWithAuth {...props} />
}

class App extends Component {
  state = { currentPage: 'registration' }

  navigateToNextPage = (page) => {
      if(this.props.isLoggedIn) {
        this.setState({ currentPage: page })
      } else {
        this.setState({ currentPage: 'home' })
      }
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



export default withAuth(App);
