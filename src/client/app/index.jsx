import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './Layout.jsx';

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>
);

render(<App/>, document.getElementById('app'));
