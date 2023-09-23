import React from "react";
import { CalProvider } from "./context";
import Header from "./Header";
import Center from "./Center";

function App() {
  return (
    <CalProvider>
      <Header />
      <Center />
    </CalProvider>
  );
}

export default App
