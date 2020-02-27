import React,{Component} from 'react'
import style from './login.module.scss'
import Input from './../common/Input/Input.js'
import {userlogin} from './../../redux/actions/userAction'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
class Login extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''

        }
    }
    handlechange =(evt)=>{
        const value = evt.target.value
       console.log(evt.target.type)
        this.setState({
           [evt.target.name]:value
        })
     }
     onsubmit =async()=>{
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         const obj = {
             email_id:this.state.email,
             password_text:this.state.password
         }
         if(obj.email_id === '' || obj.password_text === ''){
             alert('empty')
         }
         else{
            await this.props.userlogin(obj)
         }
        
        // console.log('k', JSON.stringify(obj))
     }
    render(){
        return(
            <>
            <div className={style.login_page}>
            <div className={style.login_box}>
            <Input type="email" handleChange={this.handlechange} value={this.state.email} label="Email" name="email" placeholder="Enter your email Id"/>
            <Input type="password" handleChange={this.handlechange} value={this.state.password} label="Password" name="password" placeholder="Enter password"/>
            <Input type="submit" value="Submit" onsubmit={this.onsubmit}/>
            </div>
            </div>
            </>
        )
    }
}
const mapStateToProps =(state)=>({
    ...state.userReducer
});
const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({
        userlogin
    },
    dispatch
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)