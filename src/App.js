import { useState } from "react";
import Input from "./input";
import Header from "./layout/header";
import Result from "./Result";

function App() {
  const [matrix, setM ] = useState([[1, '', ''], [], []])
  
  return (
    <div className="">
      <Header />
      <Input matrix={matrix} setM={setM} />
      <Result matrix={matrix} />
    </div>
  );
}

export default App;
