import logo from './logo.svg';
import './App.css';
import { ShowStudents } from "./component/data";
import {Form} from './component/form.jsx'
function App() {
  return (
    <div className="App">
      <h1>Database</h1>
      <Form/>
      < ShowStudents/>
    </div>
  );
}

export default App;
