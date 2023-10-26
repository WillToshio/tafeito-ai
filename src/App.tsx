import React, { ReactNode, useState } from "react";
import "./App.css";
import AuthProvider from "./Provider/authProvider";
import Routes from "./routes";

function App() {
  

  return (
    <div className="App">
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;