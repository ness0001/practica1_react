
import './App.css';
import Message from './Message.js';


const Description = () =>{
  return <p>Bootacamp Example</p>
}

const App = () => {
 // const msj = 'Hola React'
  return (
    <div className="App">

     <Message color='green' message='Hola mundo'/> 
     <Message color='blue' message='desde '/> 
     <Message color='violet' message='props'/> 
     <Description/> 
            
    </div>
  );
}

export default App;
