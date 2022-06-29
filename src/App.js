import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import BuildApp from './BuildApp'
import {TodoProvider} from './Provider'
function App() {

  
  return (
    <TodoProvider>
      <BuildApp />
    </TodoProvider>
  );
}

export default App;
