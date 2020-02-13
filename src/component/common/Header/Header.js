import React,{Component} from 'react'
import style from './header.module.scss'

class Header extends Component{
    render(){
        return(
            <div className={style.header}>
            <div className={style.logo}>website logo</div>
            </div>
        )
    }

}
export default Header