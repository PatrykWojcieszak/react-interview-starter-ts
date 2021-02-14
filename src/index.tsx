import React from "react";
import ReactDOM from "react-dom";

import { AppProviders } from "providers/AppProviders";

import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";

//STYLES
import { ThemeProvider } from "styled-components";
import { Typography } from "./styles/themeFonts";
import { mainTheme } from "./styles/themeColors";
import { GlobalStyle } from "styles/global";

//STORE
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

ReactDOM.render(
  //Redux is overkill for this kinda app, that small.
  //And I would use different state management system for smaller apps
  //But in PDF it says to take into consideration, that this app
  //might be further developed. That's why I choose to use Redux
  //I think it might make things easier in the future when this app grows up.
  <Provider store={store}>
    <AppProviders>
      <ThemeProvider theme={{ fonts: Typography, colors: mainTheme }}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AppProviders>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
