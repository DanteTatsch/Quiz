
import './App.css';
import {Bandeira1} from './Cards/cards'    
import {Bandeira2} from './Cards/cards' 
import {Bandeira3} from './Cards/cards' 








function App() {


  let cards= [
    {id:"card1", text: "teste1"  },
    {id:"card2", text: "teste2"  },
    {id:"card3", text: "teste3"  }
  ]

  return (
    

<div>


    <div>

        <h1>Países</h1>


        <Bandeira2/>
    </div>
 
</div>
   
   
  
    
  );
}

export default App;
