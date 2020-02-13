import React,{Component} from 'react'
import './home.scss'
import Header from './../common/Header/Header.js'
import Leftnav from './../common/Leftnav/Leftnav.js'

class Home extends Component{
constructor(props){
    super(props)
    this.state ={

    }
}
componentDidMount(){
    console.log('1')
}
// componentWillMount(){
//     console.log('2')
// }
// componentDidUpdate(){
//     console.log('3')
// }
render(){
    return(
        <>
        <Header/>
        <Leftnav/>
        </>
    )
}
}
export default Home