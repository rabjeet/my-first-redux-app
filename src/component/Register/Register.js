import React,{Component} from 'react'
import style from './register.module.scss'
import Header from './../common/Header/Header.js'
import Leftnav from './../common/Leftnav/Leftnav.js'
import Pagetitle from './../common/Pagetitle/Pagetitle.js'
import {registerUser} from './../../redux/actions/userAction'
import Input from './../common/Input/Input.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
class Register extends Component {
    constructor(){
        super()
        this.state={
            fname:'',
            lname:'',
            email:'',
            phone:'',
            password:''
        }
    }
    // validation =(e)=>{
    //   alert(e.target.value)
    // }
    onsubmit =async()=>{
       // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const obj = {
            first_name:this.state.fname,
            last_name:this.state.lname,
            email_id:this.state.email,
            phone_no:this.state.phone,
            password_text:this.state.password
        }
       await this.props.registerUser(obj)
        console.log('k', JSON.stringify(obj))
    }
    handlechange =(evt)=>{
       const value = evt.target.value
      console.log(evt.target.type)
       this.setState({
          [evt.target.name]:value
       })
    }
    render(){
        return(
            <>
            <Header/>
            <Leftnav/>
            <div className={style.pagebody}>
            <Pagetitle title="Register"/>
            <div className={style.form}>
            <Input type="text"  handleChange={this.handlechange} value={this.state.fname} label="First name" name="fname" placeholder="Enter first name"/>
            <Input type="text" handleChange={this.handlechange} value={this.state.lname} label="Last name" name="lname" placeholder="Enter last name"/>
            <Input type="email" handleChange={this.handlechange} value={this.state.email} label="Email" name="email" placeholder="Enter your email Id"/>
            <Input type="number" handleChange={this.handlechange} value={this.state.phone} label="Phone" name="phone" placeholder="Enter mobile no."/>
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
        registerUser
    },
    dispatch
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);