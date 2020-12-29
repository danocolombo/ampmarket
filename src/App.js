import React, { Component } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator, AmplifyTheme } from 'aws-amplify-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import MarketPage from './pages/MarketPage';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        console.log('AmplifyTheme object:');
        console.dir(AmplifyTheme);
        this.getUserData();
        Hub.listen('auth', this.onHubCapsure);
    }
    getUserData = async () => {
        const user = await Auth.currentAuthenticatedUser();
        // user ? this.setState({ user: user }) : this.setState({ user: null });
    };
    onHubCapsure = (payload) => {
        switch (payload.event) {
            case 'signIn':
                console.log('signed in');
                this.getUserData();
                break;
            case 'signUp':
                console.log('signed up');
                break;
            case 'signOut':
                console.log('signed out');
                this.setState({ user: null });
                break;
            default:
                return;
        }
    };
    render() {
        const { user } = this.state;
        return !user ? (
            <Authenticator theme={theme} />
        ) : (
            <Router>
                <>
                    {/* Nav Bar */}
                    <Navbar user={user} />
                    {/* Routes */}
                    <div className='app-container'>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/profile' component={ProfilePage} />
                        {/* <Route
                            path='/markets/:marketId'
                            component={({ match }) => (
                                <MarketPage marketId={match.params.marketId} />
                            )}
                        /> */}
                    </div>
                </>
            </Router>
        );
    }
}
// to customize cognito interfaces (login, register, etc.)
// we imported the default them above on te import
const theme = {
    ...AmplifyTheme,
    //change button color (find by doing inspect when viewing modal)
    button: {
        ...AmplifyTheme.button,
        backgroundColor: 'var(--amazonOrange)',
    },
    sectionHeader: {
        ...AmplifyTheme.sectionHeader,
        backgroundColor: 'var(--darkBlue)', //this is using the styles already loaded
    },
    // Navbar tweaks
    navBar: {
        ...AmplifyTheme.navBar,
        backgroundColor: '#3333ff',
        color: '#ffffff',
    },
};
//export default withAuthenticator(App, true, [], null, theme);
export default App;
