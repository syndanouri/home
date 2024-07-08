import cookies from "js-cookie";


export const setCookie =(key,value)=>{
    cookies.set(key,value,{expires:1})
}

export const getCookie = key=>{

    return cookies.get(key)
}

export const deleteCoockie =key=>{
    return cookies.remove(key)
}