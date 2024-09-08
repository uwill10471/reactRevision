import conf from '../conf/conf'
//chk appwrite doc copied from thr
// this class is for database 
import { Client, ID, Databases,Storage,Query } from "appwrite";

export class Service{
  client = new Client();
  databases;
  bucket;

  constructor(){

 this.client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

 
     
       this.databases = new Databases(this.client)
       this.bucket = new Storage(client)
    //bucket is Storage in appwrite
    
 

  }

  async createPost({title,slug,content,featuredImage,status,userId}){
     try{
            return await this.databases.createDocument(
                conf.appwriteDatabaeId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
     }catch(error){
        console.log("Appwrite service :: createPost :: error", error);
     }
  }

  async updatePost(slug,{title,content,featuredImage,status}){
         
    try{

        return await this.databases.updateDocument(
            conf.appwriteDatabaeId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                
                
            }
        )

    }catch(error){
        console.log("Appwrite service :: updatePost :: error ",error)
    }

  }

   async deletePost(slug){
    try{
                   return await this.databases.deleteDocument(
                    conf.appwriteDatabaeId,
                    conf.appwriteCollectionId,
                    slug
                   );
                   
    }catch(error){
        console.log("Appwrite service :: deletePost :: error ",error);
    }
   }

   async getPost(slug){
    try{
   return await this.databases.getDocument(
    conf.appwriteDatabaeId,
    conf.appwriteCollectionId,
    slug,
    
   )
    }catch(error){
        console.log("Appwrite service :: getPost :: error ",error)
        return false;
    }
   }

   async getPosts(quries = [Query.equal("status","active")]){
    try{
       return await this.databases.listDocuments(
        conf.appwriteDatabaeId,
        conf.appwriteCollectionId,
        quries,
       )
    }catch(error){
         console.log("Appwrite service :: getPosts :: error ",error)
    }
   }
  
   //File upload services 

   async uploadFile(file){
    try{
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )

    }catch(error){
        console.log("Appwrite services :: uploadFile :: error ",error)
    }
   }

   async deleteFile(fileId){
    try{
     return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
     )
    }catch(error){
        console.log("Appwrite :: delFile :: error ",error);
        return false;
    }
   }
    
   getFilePreview(fileId){
       return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
       )
   }
}

//making class obj so easily assceseable 

const service  =  new Service()

export default service
