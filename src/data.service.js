const _axios = require('axios').default
export const POST = async function(url ,route,data,header = ''){
    console.log('u',url)
try {
    if(header.headerStatus === true){
        await _axios.post(url+route,data,{
            header:{
                'Authorization':'Bearer' + sessionStorage.getItem('token_id')
            }
        })
    }
    else{
        await _axios.post(url+route,data)  
    }
    
} catch (error) {
    console.log(error)
}
}
