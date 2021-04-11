import axios from "axios";
import * as config from "./../constant/Config";

export default function callApi(method ='GET',endpoint,body){
    return axios({
            method:method,
            url:`${config.Api_URL}/${endpoint}`,
            data:body,
          }).catch(err=>{
            console.log(err)
          });
    
}