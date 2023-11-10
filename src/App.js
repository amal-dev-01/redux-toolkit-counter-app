import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement, incrementBy5 } from './features/counterSlice';
import Forms from './Forms';

function App() {
const {count,count2} =useSelector((state) =>state.counter)
const {name,age} = useSelector((state)=>state.form)

const dispatch = useDispatch()

  return (
    <div className="App">
     <h1>Redux toolkit</h1>

     <br/>
     <h3>{count}</h3><h3>{count2}</h3>
     <br></br>
     <button onClick={()=>dispatch(increment())}>increment</button>
     <button onClick={()=>dispatch(decrement())}>decrement</button>
     <button onClick={()=>dispatch(incrementBy5())}>incrementBy5</button><br /><br />



<Forms/>


<h3>

name:{name}
</h3>
<h2>

age:{age}
</h2>
 </div>
  );
}

export default App;
