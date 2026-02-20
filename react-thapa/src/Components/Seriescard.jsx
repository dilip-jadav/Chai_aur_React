

const Seriescard=(props)=>{

    return(
        
             <div>
                  <img src={props.cur.img_url} alt="Images NOT Found" width="20%" height="10%"  />
                  <h1> Name : {props.cur.name}  </h1>
                  <h2>Rating: {props.cur.rating}</h2>
                  <p> Summury :{props.cur.description}</p>
                  <p> Genre :{props.cur.genre}</p>
                  <p> Cast :{props.cur.cast}</p>
                  <a href={props.cur.watch_url} target='_blank'>
                     <button>Watch Now </button>
                   </a>
            </div>   


    );

}

export default Seriescard;
