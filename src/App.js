import React from "react";
import Main from "./components/Main";
import { firebaseKey } from "./private";
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "ecalander-3a4e2.firebaseapp.com",
  databaseURL: "https://ecalander-3a4e2.firebaseio.com",
  projectId: "ecalander-3a4e2",
  storageBucket: "ecalander-3a4e2.appspot.com",
  messagingSenderId: "131815193938",
  appId: "1:131815193938:web:937bac8e2c7be2e2264e8b",
  measurementId: "G-XVDZRW2PFV"
};
function App() {
  return <Main />;
}

export default App;
