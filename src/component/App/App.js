import React,{Component} from 'react'
import './app.scss'
import Header from './../common/Header/Header'
import Home from './../Home/Home'
import Login from './../Login/Login'
import Register from './../Register/Register.js'
import {BrowserRouter as Router, Switch, Route,NavLink } from 'react-router-dom'
import PrivateRoute from './../common/Routedifine/PrivateRoute'
import PublicRoute from './../common/Routedifine/PublicRoute'
class App extends Component{
    render(){
        return(
            <>
           <Router>
               <Switch>
                   <PublicRoute restricted={true} exact path="/" component={Login}/>
                   <PrivateRoute path="/register" component={Register}/>
               </Switch>
           </Router>
            </>
        )
    }
}
export default App