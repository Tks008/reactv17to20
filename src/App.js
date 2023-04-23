import logo from './logo.svg';
import './App.css';
import FunctionTransfer from './FunctionTransfer'
import Formvalidation from './Formvalidation'


function App() {

  function SendData()
  {
    alert("Function Transfered Successfully.");
  }

  return (
    <div className="App">
     
      {/* <Formvalidation></Formvalidation> */}
      <FunctionTransfer data={SendData}></FunctionTransfer>
    </div>
  );
}

export default App;
