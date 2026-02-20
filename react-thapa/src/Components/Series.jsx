
import data from '../api/data.json';
//import Seriescard from "Seriescard";
//import Heading from "./Heading.jsx";
import Seriescard from "./Seriescard.jsx";

const Series=()=>{

  return(
      <>
      
        

       {data.map( (cur) =>(
            <Seriescard cur={cur} key={cur.id} />
         ))}

        

    
       </>

  );
}

export default Series;  



 /*
 React.createElement('h1',null,"My name is dilip jadav");
 Instand of That You can Wright This Elements

 export const App=() =>{
    return React.createElement('h1',null,"My name is dilip jadav"); ;
}
*/