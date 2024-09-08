import conf from '../conf/conf'
//chk appwrite doc copied from thr

import { Client, Account, ID } from "appwrite";
// we createin class here so user can accessin it with objects


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
           
        this.account = new Account(this.client)
            
    }

    async createAccount({ email, password,name }){
   try{

   const userAccount = await this.account.create(ID.unique(),email,password,name);

   if(userAccount){
    // call another method direct login 
    return this.login({email,password});
 }else{
    return userAccount;
 }

   }catch(error){
     throw error;
   }


}

async login({email,password}){
    try{
       return await this.account.createEmailSession(email,password);
    }catch (error){
        throw error;
    }
}

async getCurrentUser(){
    try{
       return await this.account.get();

    }catch(error){
       console.log("Appwrite :: auth :: getCurrentUser :: error ",error)
    }

}

async logout(){
    try{
             await this.account.deleteSessions();
    }catch(error){
      throw error;
    }
}

}

//convertin class to object for easier access by passin val to class
const authService = new AuthService();

export default authService;

