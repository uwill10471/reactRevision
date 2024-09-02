import React  from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/uwill10471')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // } , [])
    return(
        <>
        <div className="text-center m-4 bg-gray-600 p-4 text-3xl">Github followers: {data.followers} </div>
        <img src={data.avatar_url} alt="Git pic" width={300}/>
        </>
    )
}

export default Github

export const gitLoader = async () => {
    const response = await fetch('https://api.github.com/users/uwill10471')
   return response.json()
}