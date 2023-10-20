import Home from './Home'
import About from './About'
import Student from './Student'
import User from './User'
import Detail from './Detail'

import {BrowserRouter,Routes,Route,Link ,NavLink} from 'react-router-dom'

function RouteCompo(){
    return(
        <>
    <BrowserRouter>
    <div className='con'>
    <NavLink  style ={({isActive})=>({color:isActive?"green" :"red"})} to='/'>Home</NavLink>
    <Link to='/about'>About</Link>
    <Link to='/student' >Student</Link>
    </div>
    <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/user/:name' element={<User/>}/>
        <Route path='/detail' element={<Detail/>}/>
       
        
    </Routes>
    
    </BrowserRouter>
        </>
    )
}
export default RouteCompo