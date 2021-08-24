export {userApi}

export default userApi

import {Ref, ref} from "vue"

function userApi<T>(url: RequestInfo , options?:RequestInit){
    const response:Ref<T> = ref()
    const request = async () => {
        const res = await fetch(url,options)
        const data = await res.json()
        response.value = data
    }
    return{
        response,
        request
    }
}

export type ApiRequest = () => Promise<void>

export interface UsableApi<T>{
    response:Ref<T | undefined>
    request:ApiRequest
}