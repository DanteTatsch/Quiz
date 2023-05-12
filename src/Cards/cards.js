import {useState, useEffect} from "react";
import axios from "axios";
import "./cards.css";


export function Bandeira1(){


    const[paises, setPaises]= useState([]);
    

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/all");
            

            setPaises(response.data)
           
        }

        fetchUser();
    },[]);

    return(

       [


        paises.map((currentPaises)=>{
            return(
                <div className="container flex-column justify-center" key ={currentPaises}>
                                                        
                    <img className="bandeira" src={currentPaises.flags.png}/>   
                      <h3>Nome: {currentPaises.name.common}</h3>       
                        <h3>Capital: {currentPaises.capital}</h3>
                        
                 </div>
                  
               
                
            )
        })

    ]  
    )
}


export function Bandeira2(){


    const[canada, setCanada]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/Canada");
            

            setCanada(response.data)
        }

        fetchUser();
    },[]);

    return(

       [


        canada.map((currentCanada)=>{
            return(
                <div  key ={currentCanada}>
                                                        
                    <img className="bandeira" src={currentCanada.flags.png}/>                 
                   
                 </div>
                  
               
                
            )
        })

    ]  
    )
}

export function Bandeira3(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/Russia");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(

       [


        paises.map((currentPaises)=>{
            return(
                <div  key ={currentPaises}>
                                                        
                    <img className="bandeira" src={currentPaises.flags.png}/>                 
                   
                 </div>
                  
               
                
            )
        })

    ]  
    )
}

export function Bandeira4(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/Australia");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(

       [


        paises.map((currentPaises)=>{
            return(
                <div  key ={currentPaises}>
                                                        
                    <img className="bandeira" src={currentPaises.flags.png}/>                 
                    <h3 >{currentPaises.capital}</h3>
                 </div>
                  
               
                
            )
        })

    ]  
    )
}


export function Bandeira5(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/malaysia");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(

       [


        paises.map((currentPaises)=>{
            return(
                <div  key ={currentPaises}>
                                                        
                    <img className="bandeira" src={currentPaises.flags.png}/>                 
                   
                 </div>
                  
               
                
            )
        })

    ]  
    )
}




export function Pais1(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/Russia");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(
        paises.map((currentPaises)=>{
            return(
                <div key ={currentPaises}>
                    
                    <h3 >{currentPaises.capital}</h3>
                  
                    
                    </div>
            
                
            )
        })

        
    )
}

export function Pais2(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/canada");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(
        paises.map((currentPaises)=>{
            return(
                <div key ={currentPaises}>
                                                       
                 
                    <h3>{currentPaises.capital}</h3>                    
                  
                    </div>
              
                
            )
        })

        
    )
}

export function Pais3(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/australia");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(
        paises.map((currentPaises)=>{
            return(
                <div key ={currentPaises}>                                                      
                
                    <h3>{currentPaises.capital}</h3>
             
                    </div>
              
            )
        })

        
    )
}


export function Pais4(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/malaysia");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(
        paises.map((currentPaises)=>{
            return(
                <div key ={currentPaises}>
                    
                    <h3 >{currentPaises.name.official}</h3>
                    </div>
               
                
            )
        })

        
    )
}

export function Pais5(){


    const[paises, setPaises]= useState([]);

    useEffect(()=>{
        async function fetchUser(){
            const response = await axios.get(" https://restcountries.com/v3.1/name/Barbados");
            

            setPaises(response.data)
        }

        fetchUser();
    },[]);

    return(
        paises.map((currentPaises)=>{
            return(
                <div key ={currentPaises}>
                    
                    <h3 >{currentPaises.name.official}</h3>
                    </div>
               
                
            )
        })

        
    )
}


console.log(Pais5)






const   questions =[   


        {
            
            

            text: "De onde é esta bandeira?" ,
            bandeira: {Bandeira1},

            options: [
                { id: 0, text: "USA", isCorrect: false },
                { id: 1, text:"Russia", isCorrect: false },
                { id: 2, text: "Brasil", isCorrect: false },
                { id: 3, text: "{Pais5}", isCorrect: true },
            ]
        },

        {
            text: "Qual a capital da Austrália?",
            bandeira:{Bandeira4},
            options: [
              { id: 0, text: Pais3, isCorrect: true },
              { id: 1, text: "Sydney", isCorrect: false },
              { id: 2, text: "Gold Coast", isCorrect: false },
              { id: 3, text: "Melbourne", isCorrect: false },
            ],
          },
          {
            text: "Qual a capital do Canada?",
            bandeira:{Bandeira2},
            options: [
              { id: 0, text: {Pais2}, isCorrect: true },
              { id: 1, text: "Vancouver", isCorrect: false },
              { id: 2, text: "Montreal", isCorrect: false },
              { id: 3, text: "Toronto", isCorrect: false },
            ],
          },
          {
            text: "De onde é esta bandeira??",
            bandeira:{Bandeira5},
            options: [
              { id: 0, text: "Paraguai", isCorrect: false },
              { id: 1, text: {Pais4}, isCorrect: true },
              { id: 2, text: "Japão", isCorrect: false },
              { id: 3, text: "China", isCorrect: false },
            ],
          },
          {
            text: "Qual a capital da Russia?",
            bandeira:{Bandeira3},
            options: [
              { id: 0, text: "São Petersburgo", isCorrect: false },
              { id: 1, text: {Pais1}, isCorrect: true },
              { id: 2, text: "Kiev", isCorrect: true },
              { id: 3, text: "Vladivostok", isCorrect: false },
            ],
          },

]
console.log (questions)

export default questions