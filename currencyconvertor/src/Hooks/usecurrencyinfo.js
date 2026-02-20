import {useEffect,useState} from 'react';

function usecurrencyinfo(currency){

    const [data,setdata]=useState({})

    useEffect(()=>{
           // fetch(`https://v6.exchangerate-api.com/v6/077402e6ea2873a0945ee3d9/latest/${currency}.json`)
           fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((res)=>setdata(res[currency]))

            console.log(data);
    },[currency])

    return data;
}

export default usecurrencyinfo;

