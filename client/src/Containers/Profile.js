import React,{useState,useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import InnerNavbar from '../Components/InnerNavbar'
import getUser from '../actions/getUser'
import {userinfo} from "../Api-requests/userRequests"
import Sidebox from "../Components/Sidebox"
import Book from "../Components/Book"
import OwnedBooks from "../Containers/OwnedBooks"
import Cart from "../Containers/Cart"
import image from "../assets/images/uploadbk.jpg"
const Profile = ()=>{
    const [redirect,setRedirect] = useState(false);
    const [user,setUser] = useState({});
    const handleLogout = ()=>{
        localStorage.removeItem('username');
        setRedirect(true);
    }
    const getProfile =async ()=>{
        console.log("...loading username")
        const username =  getUser();
        console.log(username)
        console.log("inside getprofile")
        if(username)
       {  const res = await userinfo(username);
           setUser(res.data);
           console.log(res);
           
        }
        else{
            setRedirect(true);
        }
    }
    useEffect(()=>{
    const abortController = new AbortController()
    const signal = abortController.signal
        getProfile();

   return ()=>{
    abortController.abort();
   }
    },[]);
    
    if(redirect)
    {console.log("Not authenticated");
    
   return( <Redirect to='/'/>)}
   else
    return(<div className="display"> 
    <InnerNavbar username={user.username} />
    <Sidebox fn={user.Fname} sn={user.Lname} username={user.username} mail={user.email}/>
    <div className="main">
    {/* <p>Hii {user.username}</p> */}
    {/* <Book title="Intro to algo" author="Thomas Corman" price="500" img={image}/> */}
    <Cart username={user.username} />
    <OwnedBooks className="ownedbooks" username={user.username}/>
    <button onClick={handleLogout}>Logout</button>
    </div>
    
    </div>)
}
export default Profile;