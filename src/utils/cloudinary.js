import { v2 as cloudinary } from "cloudinary"
import { log } from "console";
import fs from "fs" // read write remove (all the things related to the file handling )
// unlink path : if the path refers to a symbolic link , then the link is removed without affecting the file or directory to which that link refers , if the path refers to a file path that is not a symbolic link the file is deleted.


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null // no file path is available 

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded on CLoudinary",response.url);
        return response;
        
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // it removes the locally saved the temp file as the upload operation got failed
        return null; 
        
    }
}



export { uploadOnCloudinary }



// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commas/a/ae/Olympics_flag.jpg",
//     {public_id:"olympic_flag"},
//     function(error , result) {console.log(result);
// })
 

