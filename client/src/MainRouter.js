import React,{Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Containers/Home'
import About from './Containers/About'
import Login from './Containers/Login'
import Signup from './Containers/signup'
import Profile from './Containers/Profile'
import Search from './Containers/Search'
import Addbook from './Containers/Addbook'
import OtherProfile from './Containers/Otherprofile'
const MainRouter = ()=>{
return (<Fragment>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path = '/about' component={About} />
    <Route path='/login' component={Login} />
    <Route path = '/signup' component={Signup} />
    <Route path='/profile' component={Profile} />
    <Route path='/users/:username' component={OtherProfile} />
    <Route path='/search' component={Search} />
    <Route path='/addbook' component={Addbook} />
    </Switch>
</Fragment>)

}
export default MainRouter;
