import React from 'react';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react';
import './App.css';

const App = () => {
    return (
        <>
            <div>AppHooks</div>
        </>
    );
};
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
        backgroundColor: 'var(--grey)',
        backgroundColor: '#3333ff',
        color: '#ffffff',
    },
};
export default withAuthenticator(App, true, [], null, theme);
