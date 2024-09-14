import React from 'react'
import UserContext from './Usercontext'

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    // value in usercontext.provider pass ALL the value to the components either it be an api data or whatever
    return(
        <UserContext.Provider value={{user,setUser}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider