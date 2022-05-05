import { Body } from "./Components/Body";
import React, { useState, useEffect } from 'react';
import { Content } from "./Components/Content/Content";
import { NavBar } from "./Components/NavBar";
import { Forms } from "./Components/Forms/Forms";

function App() {
  const [data, setData] = useState([])
  const [logeado, setLogeado] = useState(false)
  useEffect(() => {

    setTimeout(() => {
      setData([
        {id: 1, name: 'jorge', sueldo:55000, edad: 64, civil: true},
        {id: 2, name: 'maria', sueldo:88000, edad: 24, civil: false},
        {id: 3, name: 'pepito', sueldo:100000, edad: 35, civil: true},
        {id: 4, name: 'laura', sueldo:150000, edad: 25, civil: false},
      ]);
    }, 4000);
   

  },[0]);
 
  const login = (objeto)=>{
    console.log('llego ',objeto);
    setLogeado(true);
  }
 
  return (
          <>
            <NavBar/>
            {
              logeado? (
                <h1>Bienvenido</h1>
              ):(
                <Forms
                login={login}
              />
              )
            }
           
            {/* { !data? <Sping/> : null}

            {
              data?.map(element => {
                return(
                  <Content key={element.id}

                  name= {element.name}
                  sueldo= {element.sueldo}
                  edad= {element.edad}
                  civil= {element.civil}
                  id={element.id}
                  />
                  )
              })
            }
            */}
           
          </>
  )
}
export default App;

// <div className="" >
//         <Body
//         name="pepito"
//          cel={5454545}
//          data={{nombre:'algo'}}
//          />
//     </div>