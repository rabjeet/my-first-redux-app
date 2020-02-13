import React,{Component} from 'react'
import style from './input.module.scss'

class Input extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <div className={style.form_input}>
                <label>{this.props.label}</label>
                <input
                 type={this.props.type}
                  name={this.props.name}
                   placeholder={this.props.placeholder}
                   value={this.props.value}
                   onChange={(e) => this.props.handleChange(e)}/>
            </div>
            </>
        )
    }
}
export default Input