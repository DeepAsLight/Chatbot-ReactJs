import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

// components

import ChatbotComponent from "./component/chatbot-component/ChatbotComponent";

export const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/:botId/:userId/" component={ChatbotComponent}></Route>
      </Switch>
    </Router>
  );
}

export default App;
