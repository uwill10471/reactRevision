import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
//protection layer use when routers are created 
function Protected({children,authentication=true}) {
 
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=> {
        if(authentication && authStatus !== authentication){  // true && false !== true which is true&& true means not logged in
            navigate("/")
           navigate("/login")
        }else if(!authentication && authStatus !== authentication){ //false && false = true
        }
        setLoader(false)

    },[authStatus,navigate,authentication])
 
    return loader? <h1>Loading...</h1>: <>{children}</>
}

export default Protected
