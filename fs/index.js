const fs=require("fs")
// // Write the content into file 
// let  data =
//   "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

// fs.writeFileSync("node.txt",data.toString())
// console.log("Successfully write in the text file");
// // Read the file 
// fs.readFile("node.txt",function(err,dat){
//   if(err){
//     console.log("Error in reading the file ");
//     return err
//   }else{
//     console.log("Data is>>>>:",dat.toString())
//     return data
//   }
// })
// Append the file 
// fs.appendFile("node.txt","---vikalp varshney",function(err,data){
//   if(err){
//     console.log("Error in appending the file ");
//     return err
//   }else{
//     console.log("Successfullt appending the file ");
    
//   }
// })
// Deleting the file 
fs.unlink("node.txt",function(err,data){
  if(err){
    console.log("Error in deleting ");
    return err
  }else{
    console.log("Suuccessfully deleting ");
  }
})