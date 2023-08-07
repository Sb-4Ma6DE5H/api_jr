
import './App.css';
import axios from 'axios';
import {useState} from 'react';
function App() {
const [state,setState] = useState([]) 

  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
          console.log(Response.data);
          setState(Response.data)
        })
      }}> <h3>Click me</h3> </button>
      {state.map((object,index)=>{
        return(
          <div>
            <h1>{index+1}</h1>
            <h1>{object.title}</h1>
            <h4>{object.body}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default App;
