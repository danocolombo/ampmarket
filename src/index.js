import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
// Bring in default Element React theme
import 'element-theme-default';
import App from './AppHooks';

import * as serviceWorker from './serviceWorker';
//the following configure line has to be BELOW all imports
Amplify.configure(aws_exports);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
