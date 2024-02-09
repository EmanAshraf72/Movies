import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom'
import Masterlayout from './Component/Masterlayout/Masterlayout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Tv from './Component/Tv/Tv';
import Movies from './Component/Movies/Movies';
import People from './Component/People/People';
import Notfound from './Component/Notfound/Notfound';
import Network from './Component/Network/Network';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import { useState } from 'react';
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function App() {
    let [user , setuser] =useState(null)

    useEffect(() => {
        if (localStorage.getItem("token") != null) {
          saveUserData()
        }
      }, [])
    

      function ProtecteRouter(props) {
        console.log(props);
        if (localStorage.getItem("token") == null) {
          // login
          return <Navigate to='/login' />
        }
        else {
          return props.children
        }
      }
    
    
      function logOut() {
    
        localStorage.removeItem("token")
        setuser(null)
        return <Navigate to='/login' />
      }

    function saveUserData() {
        // token
        let token = localStorage.getItem("token")
        // decode
        console.log(token);
        let data = jwt_decode(token)
        console.log(data);
        // setuser
        setuser(data)
      }
 let Element =createBrowserRouter([
{path:'/' ,element:<Masterlayout    user={user} logOut={logOut}/> , children:[

{path:'home' ,element:<ProtecteRouter><Home/></ProtecteRouter>},
{path:'about' ,element:<ProtecteRouter><About/></ProtecteRouter>},
{path:'movie' ,element:<ProtecteRouter><Movies/></ProtecteRouter>},
{path:'People' ,element:<ProtecteRouter><People/></ProtecteRouter>},
{path:'tv' ,element:<ProtecteRouter><Tv/></ProtecteRouter>},
{path:'login' ,element:<Login saveUser={saveUserData} />},
{path:'register' ,element:<Register/>},
{path:'network' ,element:<Network/>},
{path:'*' ,element:<Notfound/>},




] }])

return(
<>
<RouterProvider router={Element}/>

</>



)

}

export default App;
