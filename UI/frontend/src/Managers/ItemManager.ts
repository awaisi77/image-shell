import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import config from "../custom-config.json"
const URL_File=config.FILE_UPLOAD_URL
const URL=config.BASE_URL+"/item"

export class ItemManager{
    public static async createItem(params:any){
        let res=await axios.post(`${URL}/addNewItem`,params);
        if(res.data.success){
            return {"message":res.data.message,success:true,data:res.data.result}
        }
        return {"message":res.data.message,success:false,data:null}
    }
    public static async getCollectionByUserId(id:string){
        debugger
       let res=await axios.get(`${URL}/getCollectionByUser?UserId=${id}`)
       console.log(res)
    }
    public static async uploadImage(params:FormData){
        let res=await axios.post(`${URL_File}`,params);
        if(res.status===200){
            console.log('typeof',typeof (res.data));
           /* let spl = res.data.split(",");
            console.log('spl',spl);
            let hashArray = spl[2].split(":");

            let hash = hashArray[1].replace(/['"]+/g, '');*/
            return {success:true,data:res.data.Hash,message:'File Uploaded Successfully.'}
        }
        return {message:"Error Occurred",success:false,data:null}
    }
    public static async getItemsByCollection(id:string,collectionId:string){
        debugger
       let res=await axios.get(`${URL}/getItemsByCollection?UserId=${id}&CollectionId=${collectionId}`)
        if(res.data){
            return res.data
        }
        else {
            return {success:false,message:"Error in Loading Items"}
        }
    }
    public static async getItemsById(id:string){
        debugger
        let res:any;
        try{
        res=await axios.get(`${URL}/getItemByItemId?ItemId=${id}`)
            console.log('res',res)
        if(res.data.success && res.data){
            return res.data
        }
        else {
            return {success:false,message:"Error in Loading Items"}
        }}
        catch (e) {
            console.log('res',e)
            return {success:false,message:"Error in Loading Items"}
        }
    }
    public static async getItemsMarketplace(){
        debugger
        let res:any;
        try{
            res=await axios.get(`${URL}/getAllItemsForMarket`)
            console.log('res',res)
            if(res.data.success && res.data){
                return res.data
            }
            else {
                return {success:false,message:"Error in Loading Items"}
            }}
        catch (e) {
            console.log('res',e)
            return {success:false,message:"Error in Loading Items"}
        }
    }
}