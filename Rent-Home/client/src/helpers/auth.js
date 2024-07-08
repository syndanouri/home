import { getCookie, setCookie } from "./cookies"
import { getLocalStorage, setLocalStorage } from "./localStorage";



// hedha ysir ba3ed login 
export const setAuthentification =(token,user)=>{
    setCookie('token',token);
    setLocalStorage('user',user)
}

export const isAuthenticated =()=>{

    if(getCookie('token')&& getLocalStorage('user')){
        return getLocalStorage('user'); 
    }else{
        return false
    }
}