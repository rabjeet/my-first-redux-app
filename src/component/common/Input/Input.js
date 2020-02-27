import React,{Component} from 'react'
import style from './input.module.scss'

class Input extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
        {this.props.type === "text" ? 
           <div className={style.form_input}>
           <label>{this.props.label}</label>
           <input
            type={this.props.type}
             name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={(e) => this.props.handleChange(e)}/>
       </div>:
       this.props.type === "password" ?
       <div className={style.form_input}>
           <label>{this.props.label}</label>
           <input
            type={this.props.type}
             name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={(e) => this.props.handleChange(e)}
             />
       </div>:
       this.props.type === "email" ?
       <div className={style.form_input}>
           <label>{this.props.label}</label>
           <input
            type={this.props.type}
             name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={(e) => this.props.handleChange(e)}
             />
       </div>:
       this.props.type === "number" ?
       <div className={style.form_input}>
           <label>{this.props.label}</label>
           <input
            type={this.props.type}
             name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={(e) => this.props.handleChange(e)}/>
       </div>:
        this.props.type === "select" ?
        <div className={style.form_input}>
            <label>{this.props.label}</label>
            <select name={this.props.name} value={this.props.value}  onChange={(e) => this.props.handleChange(e)}>
                <option>Select {this.props.select}</option>
                </select>
        </div>:
         this.props.type === "submit" ?
         <div className={style.form_input}>
             <input type={this.props.type} value={this.props.value} onClick={(e) => this.props.onsubmit(e)}/>
         </div>:''
    } 
            </>
        )
    }
}
export default Input