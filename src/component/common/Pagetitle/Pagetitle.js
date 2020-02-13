import React,{Component} from 'react'
import style from './pagetitle.module.scss'
class  Pagetitle extends Component{
constructor(props){
    super(props)
}
render(){
    return(
        <>
       <div className={style.title}>
       {this.props.title}
       </div>
        </>
    )
}
}
export default Pagetitle