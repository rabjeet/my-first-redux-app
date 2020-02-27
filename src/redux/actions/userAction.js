import * as actionType from './../actionTypes/userType'
import {baseurl} from './../../baseUrl'
import * as service from './../../data.service'

export const registerUser = (obj) => async dispach =>{
    //alert('action'+baseurl)
    const response = service.POST(baseurl,'/register',obj)
    console.log('rr',response)
}
export const userlogin = (obj) => async dispach =>{
    console.log('ss',obj)
    try {
        const response =await service.POST(baseurl,'/login',obj)
        if(response){
            console.log('rr',response)
        }
    } catch (error) {
        
    }
    
}