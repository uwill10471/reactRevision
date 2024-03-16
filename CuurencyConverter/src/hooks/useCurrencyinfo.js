import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
    // we want to fetch this (hook) api when it is being asked for 
     const [data,setData] = useState({}) //passing empty object if api data cant be shown
  useEffect(()=> {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    
     fetch(url)
     .then((res) => res.json())
     .then((res) => setData(res[currency])) //currency is used in sqaure bracket cuz in api key always changes 

     console.log(data);

  },[currency]) // want to run useCurrencyinfo wheneever currency changed by user
  console.log(data);

  return data

}

export default useCurrencyInfo;