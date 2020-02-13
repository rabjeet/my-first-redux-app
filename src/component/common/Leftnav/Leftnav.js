import React,{Component} from 'react'
import style from './Leftnav.module.scss'
import {NavLink} from 'react-router-dom'
class  Lefnav extends Component{
constructor(props){
    super(props)
}
render(){
    return(
        <>
        <div className={style.menu}>
        <div className={style.menu_in}>
        <ul>
        <li>
            <NavLink to="/register">register</NavLink>
        </li>
        </ul>
        </div>
        </div>
        </>
    )
}
}
export default Lefnav