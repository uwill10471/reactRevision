import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import store from './store/store'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components/index'


function App() {

const [loading,setLoading] = useState(true);
const dispatch = useDispatch()

//cchking if logged in or not
useEffect(()=>{
authService.getCurrentUser()
.then(()=> {
  if(userData){
    dispatch(login({userData}));
  }else{
    //if didnt get data keep logged out
    dispatch(logout());
  }
})
.finally(() => setLoading(false))
},[])

return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
    <Header/>
    <main>
     TODO:  {/* <Outlet/>*/}
    </main>
    <Footer/>
    </div>
  </div>
) : null

}

export default App
