import React from "react";
import Header from "./Header";
import Profile from "./Profile";

import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme"

function App() {

  
  return (
    <main>
      <UserProvider>
        <ThemeProvider>
          <Header />
          <Profile />
        </ThemeProvider>
      </UserProvider>
    </main>
  );
}

export default App;
