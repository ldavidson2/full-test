import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./components/message";
import Login from "./components/login";
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
