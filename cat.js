const done=require("./bash");
module.exports=(file)=>{
let fs=require("fs");
fs.readFile(`./${file}`,'utf8',function(err,files){
  if(err) done.func("Error!")
  else{
   done.func(files);
  }
})
}
