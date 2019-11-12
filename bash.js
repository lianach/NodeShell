
//module.paths[0]->full path
const done=(output)=>{
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}
module.exports.func=done;
let currentPath=require("./pwd");
let currentDir=require("./ls");
let catCmd=require("./cat");
let curlCmd=require("./curl");
process.stdout.write('prompt > ');
process.stdin.on('data',(data)=>{
  let cmd=data.toString().trim()
  let s= cmd.split(" ");
  if(s[0]==='pwd')
  {  currentPath();
  }
 else if(s[0]==='ls'){
  currentDir();
  }
 else if(s[0]==="cat"){
catCmd(s[1]);
  }
 else if(s[0]==='curl'){
   curlCmd(s[1]);
  }
 else process.stdout.write('Invalid command!\nprompt > ');
});
