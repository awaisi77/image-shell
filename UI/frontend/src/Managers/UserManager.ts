import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import config from "../custom-config.json"
const URL=config.BASE_URL+"user"

export class UserManager{
    public static async createUser(params:URLSearchParams){
        let res:any={}
        try{
            new Response(params).text().then(console.log);

            debugger

             res=await axios.post(`${URL}/createUser`,params);
            if(res.status===200){
                debugger
                if(res.data){
                    return {"message":res.data.message,success:res.data.success}
                }
                return {"message":"Error Occurred",success:res.data.success,error:true}
            }
            else {
                debugger
                return {"message":"Error Occurred",success:res.data.success,error:true}
                
            }
        }
        catch(e){
            debugger
            return {"message":"Error Occurred",success:false}
        }
      
     
    }
  

}