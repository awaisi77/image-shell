import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import config from "../custom-config.json"
const URL=config.BASE_URL+"collection"

export class CollectionManager{
    public static async createCollection(params:FormData){
        let res:any={}
        try{
             res=await axios.post(`${URL}/addCollection`,params);
            if(res.status===200){
                debugger
                if(res.data){
                    return {"message":res.data.message,success:res.data.success}
                }
                return {"message":"Error Occurred",success:res.data.success}
            }
            else {
                debugger
                return {"message":"Error Occurred",success:res.data.success}
                
            }
        }
        catch(e){
            debugger
            return {"message":"Error Occurred",success:false}
        }
      
     
    }
    public static async getCollectionByUserId(id:string){
        debugger
       let res=await axios.get(`${URL}/getCollectionByUser?UserId=${id}`)
        if(res.data){
            return res.data
        }
        else {
            return {success:false,message:"Error"}
        }

       console.log(res)
       debugger
    }

}