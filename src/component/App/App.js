import React,{Component} from 'react'
import './app.scss'
import Header from './../common/Header/Header'
import Home from './../Home/Home'
import Register from './../Register/Register.js'
import {BrowserRouter as Router, Switch, Route,NavLink } from 'react-router-dom'
class App extends Component{
    render(){
        return(
            <>
           <Router>
               <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route path="/register" component={Register}/>
               </Switch>
           </Router>
            </>
        )
    }
}
export default App