const done=require("./bash")
module.exports=()=>{
  let fs=require("fs");
  fs.readdir('./',"utf8",function(err,files){
    if(err) done.func("err")
    else{

      done.func(files.join('\n'));
    }
  })
}
