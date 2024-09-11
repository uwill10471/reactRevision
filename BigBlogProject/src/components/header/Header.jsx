import React from 'react'
import {Container, LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Header(){
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate() //for navigation

  const navItems =[{ //in navigation bar this helps to add new things directly
   name: 'Home',
   slug: "/",
   active: true
  },
  {
    name: "Login",
    slug: "/login",
    active: !authStatus
  },
  {
    name:"Signup",
    slug:"/login",
    active: !authStatus
  },
  {
    name:"ALL Posts",
    slug: "/all-posts",
    active:authStatus,

  },{
    name:"Add Post",
    slug: "/add-post",
    active: authStatus,
  }
]

    return(
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                        </Link>
                        </div>

                        <ul className="flex ml-auto">
                            {navItems.map((item)=>
                            item.active? (
                                <li key={item.name}>
                                    <button
                                    onClick={()=> navigate(item.slug)} //aagar click hoga to use route pe chala jayea jo slug m defined hai
                                   className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 roounded-full' >
                                        {item.name}</button>
                                </li>
                            ):null)}

                            {authStatus && (
                                <li>
                                    <LogoutBtn/>
                                </li>
                            )} 
                            {/* //agar true hoga tab dikhhe ga */}
                        </ul>
                </nav>
            </Container>
        </header>
    )
}