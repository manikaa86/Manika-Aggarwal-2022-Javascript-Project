import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [searchPhrase, setSearchPhrase] = useState("")

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(newData => {
      console.log(newData)
      setData(newData)
    });
  
  }, [])
  const handleClick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchPhrase}`)
    .then(response => response.json())
    .then(newData => {
      console.log(newData)
      setData(newData)
    });
  }

  const onInputChange = (newInput) => {
    console.log(newInput)
    setSearchPhrase(newInput) 
  }

  return (
    <div className="App">
      <div className = "mainInfo"> 
        <div className = "title"> 
          <h1> Poxedex Project </h1>
          <h2 className = "nameText">{data.name}</h2>
        </div>
        {/* <p className = "nameText"><label> Order: </label> {data.order}</p> */}
        {/* <p className = "nameText">{data.species?.name}</p> */}
        {/* <p className = "nameText">{data.height}</p> */}
        <img className = "pokemonImage" src = {data.sprites?.front_default}/> 
     </div>

     <div className = "information">
        <div className = "search">
           <label>Pokemon Name </label>
            <input type = "text" onChange = {(event) => onInputChange(event.target.value)}/> 
            
            <button onClick = {handleClick}> Click here to search </button>
        </div>
        <div className = "card"> 
             <div className = "cardData" > 
                <label> Height </label> <p> {data.height} </p> 
              </div>
              <div className = "cardData" > 
               <label> Weight </label> <p> {data.weight} </p> 
              </div>
              <div className = "cardData" > 
               <label> ID </label> <p> {data.id} </p>
               </div>
               <div className = "cardData" > 
                <label> Types </label> 
                {data.types?.map((el) => {
                    return (
                      <p> {el.type.name} </p>
                    )
                  }) }
                </div>
        </div>
       </div>
       {/* <div className = "properties"> <label> Abilities </label> <p> {data.abilities} </p> </div>   */}
    </div>
  );
}

export default App;
