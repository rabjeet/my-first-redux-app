import {USERREGISTER} from './../actionTypes/userType'
import {registerUser} from './../actions/userAction'
const intialState ={
    status:false
}
const userReducer = (state =intialState ,action) => {
    switch (action.type) {
        case USERREGISTER:
        return{

        }
    
        default:
            return state
    }
}
export default userReducer